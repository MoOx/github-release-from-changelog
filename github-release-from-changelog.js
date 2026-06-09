#!/usr/bin/env node

import cp from "node:child_process";
import fs from "node:fs";
import process from "node:process";
import minimist from "minimist";
import grizzly from "grizzly";

// Report a user-facing error without the uncaught-exception noise Node prints
// for a bare `throw`, then exit with a failure code.
function fail(message) {
  console.error(message);
  process.exit(1);
}

const changelogFileNames = [
  "CHANGELOG.md",
  "Changelog.md",
  "changelog.md",
  "CHANGES.md",
  "Changes.md",
  "changes.md",
  "HISTORY.md",
  "History.md",
  "history.md",
  "NEWS.md",
  "News.md",
  "news.md",
  "RELEASES.md",
  "Releases.md",
  "releases.md",
];

/**
 * GitHub release from an package.json + CHANGELOG
 *
 * Usage:
 *   $ GITHUB_TOKEN=aGitHubToken
 *   $ github-release-from-changelog [--filename CustomChangelog.md]
 *
 * we will use `grizzly` (https://github.com/coderaiser/node-grizzly)
 * so we need
 * - user (user from package.json repo field)
 * - repo (same as)user
 * - tag (version)
 * - release name (tag)
 * - description (changelog section corresponding to tag)
 */

// read command line arguments
const argv = minimist(process.argv.slice(2));

// changelog file name
let changelogFileName = argv.filename;
if (!changelogFileName) {
  for (const fileName of changelogFileNames) {
    if (fs.existsSync(fileName)) {
      changelogFileName = fileName;
      break;
    }
  }
}

// read package.json
let pkg;
try {
  pkg = JSON.parse(fs.readFileSync(process.cwd() + "/package.json", "utf8"));
} catch {
  fail("No package.json found in " + process.cwd());
}

// read changelog
let changelog;
try {
  changelog = fs.readFileSync(process.cwd() + "/" + changelogFileName, {
    encoding: "utf8",
  });
} catch {
  fail("No " + changelogFileName + " found in " + process.cwd());
}

// parse the repository field to get the user & repo slug
// supports full git/https/ssh GitHub urls as well as the npm shorthands
// "user/repo" and "github:user/repo"
let repoUrl = pkg.repository;
if (repoUrl === undefined) {
  fail("No `repository` field found in " + process.cwd() + "/package.json");
}
if (typeof repoUrl === "object" && repoUrl.url) {
  repoUrl = repoUrl.url;
}
if (typeof repoUrl !== "string") {
  fail("Unable to read the `repository` field in package.json");
}

// drop an optional npm host shorthand prefix, e.g. "github:user/repo"
repoUrl = repoUrl.replace(/^github:/i, "");

let slug;
const urlMatches = repoUrl.match(/github\.com[/:]([^/]+\/[^/]+?)(?:\.git)?\/?$/i);
if (urlMatches) {
  slug = urlMatches[1];
} else if (/^[^/]+\/[^/]+$/.test(repoUrl)) {
  // npm shorthand: "user/repo"
  slug = repoUrl;
} else {
  fail(
    'Unable to parse repository url "' +
      repoUrl +
      '". Expected a GitHub url (e.g. "https://github.com/user/repo.git") ' +
      'or the npm shorthand "user/repo".',
  );
}

const repoData = slug.split("/");
const user = repoData[0];
const repo = repoData[1].replace(/\.git$/, "");

// version
const version = pkg.version;

// Look for the tag in either X.Y.Z or vX.Y.X formats
const tags = cp.execSync("git tag", { encoding: "utf8" });
const tagMatches = tags.match(new RegExp("^(v?)" + version + "$", "gm"));
let tagName;
if (tagMatches === null) {
  fail("Tag " + version + " or v" + version + " not found");
} else {
  tagName = tagMatches[0];
}

// changelog
const body = [];
let start = false;
const changelogLines = changelog.replace(/\r\n/g, "\n").split("\n");

// accept various ways to specify version starting like
// # 1.0
// ## v1.0
// ## [v1.0
const versionStartStringRe = "^##? \\[?v?";
const versionStartRe = new RegExp(versionStartStringRe);
const versionRe = new RegExp(versionStartStringRe + version.replace(/\./, "."));
const footerLinkRe = new RegExp("^\\[");

changelogLines.some(function (line) {
  if (argv.debug) console.log("MATCH", line.match(versionRe));
  if (!start && line.match(versionRe)) {
    start = true;
    if (argv.debug) console.log("START");
  } else if (start && (line.match(versionStartRe) || line.match(footerLinkRe))) {
    if (argv.debug) console.log("END");
    return true;
  } else if (start) {
    if (argv.debug) console.log(line);
    // between start & end, collect lines
    body.push(line);
  }
  if (argv.debug) console.log("IGNORED " + line);
});
const releaseBody = body.join("\n").trim();

// prepare release data
const releaseOptions = {
  user: user,
  repo: repo,
  tag: tagName,
  name: tagName,
  body: releaseBody,
};

const githubReleaseUrl = "https://github.com/" + user + "/" + repo + "/releases/tag/" + tagName;

if (argv.dryRun) {
  console.log(tagName);
  console.log();
  console.log("---");
  console.log(releaseBody);
  console.log("---");
  console.log();
  console.log("NOT released, link below should not have the release notes");
  console.log(githubReleaseUrl);
} else {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    fail("GITHUB_TOKEN required");
  }

  grizzly(token, releaseOptions).then(
    function () {
      console.log(githubReleaseUrl);
    },
    function (err) {
      console.error(err && err.message ? err.message : err);
      process.exit(1);
    },
  );
}
