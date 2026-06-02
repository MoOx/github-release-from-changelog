# github-release-from-changelog

<a href="https://github.com/MoOx/react-from-svg?sponsor=1">
  <img width="140" align="right" alt="Sponsoring button" src="https://github.com/moox/.github/raw/main/FUNDING.svg">
</a>

[![npm package version](https://img.shields.io/github/package-json/v/MoOx/github-release-from-changelog) ![npm downloads](https://img.shields.io/npm/dm/github-release-from-changelog)](https://www.npmjs.com/package/github-release-from-changelog)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/MoOx/github-release-from-changelog/test.yml)](https://github.com/MoOx/github-release-from-changelog/actions)
[![License](https://img.shields.io/github/license/MoOx/github-release-from-changelog)](https://github.com/MoOx/github-release-from-changelog)  
![My website moox.io](https://img.shields.io/badge/%F0%9F%8C%90-https%3A%2F%2Fmoox.io-gray?style=social)
[![GitHub followers](https://img.shields.io/github/followers/MoOx?style=social&label=GitHub)](https://github.com/MoOx)
[![LinkedIn Follow](https://img.shields.io/badge/%F0%9F%91%94-LinkedIn-gray?style=social&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmaxthirouin%2F)](https://www.linkedin.com/in/maxthirouin/)
[![BlueSky Follow](https://img.shields.io/badge/BlueSky-%20?style=social&logo=bluesky)](https://bsky.app/profile/moox.io)
[![X Follow](https://img.shields.io/twitter/follow/MoOx?style=social&label=)](https://x.com/MoOx)

> Create GitHub releases from `CHANGELOG.md`

**This tool _edits the git tag_ on GitHub and _create a GitHub release_ with the correct changelog section.**

You need:

- a changelog file ([various filenames supported](https://github.com/MoOx/github-release-from-changelog/blob/master/github-release-from-changelog.js) automatically or specified via `--filename` option) with markdown titles that start with the version (eg: `# 1.2.0`, `## v1.2.0`, `# [1.2.0`...)
- a `package.json` with a `version` field.
- a git tag with the corresponding version in either `X.Y.Z` or `vX.Y.Z` formats.
- a `GITHUB_TOKEN` as an env var. See <https://github.com/MoOx/npmpub#requirements> for instructions.

_Included in [npmpub](https://github.com/MoOx/npmpub) !_

## Install

```console
npm install github-release-from-changelog
```

## Usage

```console
github-release-from-changelog [--filename CustomChangelog.md]
```

### Options

#### `--filename`

Specify your own filename

#### `--dryRun`

Test what the release will looks like

#### `--debug`

Display parsing information

## Advanced Installation and Usage

github-release-from-changelog is fully integrated in [npmpub](https://github.com/MoOx/npmpub).
Please follow the instructions at <https://github.com/MoOx/npmpub#install> to install and use it.
npmpub automatically calls github-release-from-changelog by default.

github-release-from-changelog also plays well with other publishing tools such as [release-it](https://www.npmjs.com/package/release-it).
One can create a release using release-it (which also updates `package.json`, but does not free you from maintaining `CHANGELOG.md` for yourself) and then use github-release-from-changelog to create the release on GitHub.

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.

## CHANGELOG

See [CHANGELOG.md](CHANGELOG.md)

## LICENSE

The license is MIT.
See [LICENSE](LICENSE).
