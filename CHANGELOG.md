# 1.2.1 - 2016-06-28

- Fixed: ``Empty value for parameter 'tag_name': undefined``

# 1.2.0 - 2016-06-28

- Changed: use ``grizzly`` v2.x
  (ref [node-grizzly#1](https://github.com/coderaiser/node-grizzly/issues/1))

# 1.1.4 - 2016-06-07

- Fixed: ``TypeError: Cannot read property 'createRelease' of undefined``
  by fixing ``grizzly`` version.
  ([#12](https://github.com/MoOx/npmpub/issues/12))

# 1.1.3 - 2016-02-12

- Fixed: `chmod +x ./github-release-from-changelog.js`

# 1.1.2 - 2016-02-12

- Fixed: tag starting with "v" are now compatible.
([#9](https://github.com/MoOx/github-release-from-changelog/pull/9))

# 1.1.1 - 2016-01-06

- Fixed: blank line are not stripped for block anymore (which can break
  markdown rendering - eg: title using `##` )
([#7](https://github.com/MoOx/github-release-from-changelog/pull/7))

# 1.1.0 - 2015-11-10

- Added: `--filename` option to specify your own filename
(if you don't use `CHANGELOG.md`).

# 1.0.0 - 2015-10-04

✨ Initial release
