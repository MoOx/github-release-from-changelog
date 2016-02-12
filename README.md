# github-release-from-changelog

> Create GitHub releases from CHANGELOG.md

**Included in [npmpub(lish)](https://github.com/MoOx/npmpub) !.**

---

You need:

- a CHANGELOG with the following format:
```md
# X.Y.Z - ...

...
```
- a `package.json` with a `version` field
- a git tag with the corresponding version in either `X.Y.Z` or `vX.Y.Z` formats
- a `GITHUB_TOKEN` as an env var

This plugin edit the git tag on GitHub and create a GitHub release with the
correct CHANGELOG.md section.

## Install

```
$ npm install github-release-from-changelog
```

## Usage

```console
$ github-release-from-changelog [--filename CustomChangelog.md]
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
