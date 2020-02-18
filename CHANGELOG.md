# `github-release-from-changelog` Changelog

## 2.1.1 - 2020-02-18

- Bump dependency triggering warning  
  `[GitHub API] Deprecation notice for authentication via URL query parameters`

## 2.1.0 - 2019-09-20

- 😂 Fix a specific bug if a line contain a version similar to supported markdown title
- 🎉 We now show a direct link to the release

## 2.0.0 - 2019-09-20

🥳 Less contraints!

Now we support multiples version format like

- `# X.Y.Z`
- `## X.Y.Z`
- `## vX.Y.Z`
- `## [vX.Y.Z`
- `## [X.Y.Z`

(This means no more code specific to https://keepachangelog.com & more flexibility)

## 1.3.2 - 2018-06-07

- [Upgrade of grizzly to prevent security issue](https://github.com/MoOx/github-release-from-changelog/commit/9634bf8e1fa9ce9f693277bfed24bb83ead5a9e8) by @ntwb

## 1.3.1 - 2018-01-22

- [Fix "Keep A Changelog" version detection](https://github.com/MoOx/github-release-from-changelog/commit/b96ea68110ee580abd31fbcc028c92091c03682d)
  by @igetgames

## 1.3.0 - 2017-12-06

- [Add support for auto-determing different CHANGELOG filenames](https://github.com/MoOx/github-release-from-changelog/commit/eb8f20855810201561144ca3762168d1da421d12),
  by @koppor, reported by @MoOx (in [#6](https://github.com/MoOx/github-release-from-changelog/issues/6))
- [Add support for format of "Keep a Changelog"](https://github.com/MoOx/github-release-from-changelog/commit/cf50e4e8f0829c36eb837974e189d733fdb0effd),
  by @koppor

## 1.2.1 - 2016-06-28

- Fixed: `Empty value for parameter 'tag_name': undefined`

## 1.2.0 - 2016-06-28

- Changed: use `grizzly` v2.x
  (ref [node-grizzly#1](https://github.com/coderaiser/node-grizzly/issues/1))

## 1.1.4 - 2016-06-07

- Fixed: `TypeError: Cannot read property 'createRelease' of undefined`
  by fixing `grizzly` version.
  ([#12](https://github.com/MoOx/npmpub/issues/12))

## 1.1.3 - 2016-02-12

- Fixed: `chmod +x ./github-release-from-changelog.js`

## 1.1.2 - 2016-02-12

- Fixed: tag starting with "v" are now compatible.
  ([#9](https://github.com/MoOx/github-release-from-changelog/pull/9))

## 1.1.1 - 2016-01-06

- Fixed: blank line are not stripped for block anymore (which can break
  markdown rendering - eg: title using `##` )
  ([#7](https://github.com/MoOx/github-release-from-changelog/pull/7))

## 1.1.0 - 2015-11-10

- Added: `--filename` option to specify your own filename
  (if you don't use `CHANGELOG.md`).

## 1.0.0 - 2015-10-04

✨ Initial release
