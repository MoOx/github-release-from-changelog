# github-release-from-changelog

[![NPM version](https://img.shields.io/npm/v/github-release-from-changelog.svg?style=flat)](https://www.npmjs.com/package/github-release-from-changelog)

> Create GitHub releases from `CHANGELOG.md`

**Included in [npmpub(lish)] !.**

You need:

* a CHANGELOG following the format of [keep a changelog](http://keepachangelog.com/en/1.0.0/) or a CHANGELOG with the following format:

```md
# X.Y.Z - ...

...
```

* a `package.json` with a `version` field.
* a git tag with the corresponding version in either `X.Y.Z` or `vX.Y.Z` formats.
* a `GITHUB_TOKEN` as an env var. See <https://github.com/MoOx/npmpub#requirements> for instructions.

This tool edits the git tag on GitHub and create a GitHub release with the correct `CHANGELOG.md` section.

## Install

```console
npm install github-release-from-changelog
```

## Usage

```console
github-release-from-changelog [--filename CustomChangelog.md]
```

## Advanced Installation and Usage

github-release-from-changelog is fully integrated in [npmpub(lish)].
Please follow the instructions at <https://github.com/MoOx/npmpub#install> to install and use it.
npmpub(lish) automatically calls github-release-from-changelog by default.

github-release-from-changelog also plays well with other publishing tools such as [release-it](https://www.npmjs.com/package/release-it).
One can create a release using release-it (which also updates `package.json`, but does not free you from maintaining `CHANGELOG.md` for yourself) and then use github-release-from-changelog to create the release on GitHub.

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.

## CHANGELOG

See [CHANGELOG.md](CHANGELOG.md)

## LICENSE

The license is MIT.
See [LICENSE](LICENSE).

[npmpub(lish)]: https://github.com/MoOx/npmpub
