# github-release-from-changelog

[![Test Status](https://github.com/MoOx/github-release-from-changelog/workflows/Test/badge.svg)](https://github.com/MoOx/github-release-from-changelog/actions)
[![Version](https://img.shields.io/npm/v/github-release-from-changelog.svg?style=flat)](https://www.npmjs.com/package/github-release-from-changelog)

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
