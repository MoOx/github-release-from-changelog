#!/usr/bin/env node

/**
 * GitHub release from an package.json + CHANGELOG
 *
 * Usage:
 *   $ GITHUB_TOKEN=aGitHubToken
 *   $ github-release-from-changelog [--filename CustomChangelog.md]
 *
 * we will use `grizzly` (https://github.com/coderaiser/node-grizzly)
 * so we need
 * - owner (user from package.json repo field)
 * - repo (same as)owner
 * - tag (version)
 * - release name (tag)
 * - description (changelog section corresponding to tag)
 */

var token = process.env.GITHUB_TOKEN
if (!token) {
  throw "GITHUB_TOKEN required"
}

// read command line arguments
var cp = require('child_process');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2));

// changelog file name
var changelogFileName = argv.filename || "CHANGELOG.md";

// get dep
var release = require("grizzly")

// read package.json
var pkg
try {
  pkg = require(process.cwd() + "/package.json")
}
catch(e) {throw "No package.json found in " + process.cwd()}

// read changelog
var changelog
try {
  changelog = require("fs").readFileSync(process.cwd() + "/" + changelogFileName, {encoding: "utf8"})
}
catch(e) {throw "No " + changelogFileName + " found in " + process.cwd()}

// parse repository url to get owner & repo slug
var repoUrl
repoUrl = pkg.repository
if (repoUrl === undefined) {
  throw "No repository.url found in " + process.cwd() + "/repository(.url)"
}
if (typeof repoUrl === "object" && repoUrl.url) {
  repoUrl = repoUrl.url
}
var matches = repoUrl.match(/(?:https?|git(?:\+ssh)?)(?::\/\/)(?:www\.)?github\.com\/(.*)/i)
if (matches === null) {
  throw "Unable to parse repository url"
}
var repoData = matches[1].split("/")
var owner = repoData[0]
var repo = repoData[1].replace(/\.git$/, "")

// version
var version = pkg.version

// Look for the tag in either X.Y.Z or vX.Y.X formats
var tags = cp.execSync("git tag", {encoding: 'utf8'})
var tagMatches = tags.match(new RegExp("^(v?)" + version + "$", "gm"))
var tagName
if (tagMatches === null) {
  throw "Tag " + version + " or v" + version + " not found"
} else {
  tagName = tagMatches[0]
}

// changelog
var body = []
var start
// read from # version to the next # .*
changelog.split("\n").some(function(line, i) {
  // start with the # version
  if (!start && line.indexOf("# " + version) === 0) {
    start = true
  }
  // end with another # version
  else if (start && line.indexOf("# ") === 0) {
    return true
  }
  // between start & end, collect lines
  else if (start) {
    body.push(line)
  }
})
body = body.join("\n")

// prepare release data
var releaseOptions = {
  owner: owner,
  repo: repo,
  tag_name: tagName,
  name: tagName,
  body: body
}

// console.log("About to release ", releaseOptions)

release(token, releaseOptions, function(err) {
  if (err) {
    throw err
  }
  console.log(owner + " / " + repo + " " + tagName + " released")
})
