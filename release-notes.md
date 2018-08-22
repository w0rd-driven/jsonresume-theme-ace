# Release Notes

## Development

## v1.1.0 - August 22nd, 2018

- Page dependencies updated to the latest major versions. - [42a30fb](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/42a30fb)
- Title updated from just the assumed name to Name - Label if present. This may not be ideal but it makes saving as PDF use a slightly more sane default. - [9a914ef](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/9a914ef)
- Adjusted the default margins and font sizes for a few key bootstrap selectors - [a853b5f](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/a853b5f)
- Fix labels to remove the black border on print in favor of a same color border to the label-primary. This is definitely hacky but we currently only have one label being used. - [472277e](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/472277e)
- Pushing the name to the very top under the printer margins and reducing the body by 20 pixels. The default margin-top for `#basics-name` was 21px. - [a9bb435](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/a9bb435)
- Using the bootstrap `hidden-print` and `visible-print` classes. We're now hiding the icon columns and only showing the wider text column in print only. This is almost unnecessary duplication but I don't like the idea of adjusting the classes on the fly. Javascript executing before print is a little janky when this is enough of a challenge to debug. - [fc02389](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/fc02389)
- [#10](https://github.com/w0rd-driven/jsonresume-theme-ace/issues/10) - CSS adjustments for web & print ([@w0rd-driven](https://github.com/w0rd-driven))

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.8...v1.1.0)

## v1.0.8 - May 5th, 2018
- [#7](https://github.com/w0rd-driven/jsonresume-theme-ace/issues/7) - Fix dependency security concerns ([@w0rd-driven](https://github.com/w0rd-driven))

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.7...v1.0.8)

## v1.0.7 - March 7th, 2016
- [#6](https://github.com/w0rd-driven/jsonresume-theme-ace/issues/6) - Navbar follows page during printing ([@w0rd-driven](https://github.com/w0rd-driven))

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.6...v1.0.7)

## v1.0.6 - March 4th, 2016
- Correcting some derpiness and print styles. Removing the extra stylesheet as trying to get that working with instead of against bootstrap was just annoying. Chrome's "Emulate print media" is the bee's knees. - [2e48fcc](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/2e48fcc)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.5...v1.0.6)

## v1.0.5 - March 4th, 2016
- Moving profile-pic to id. Added basics-profile-link padding to adjust the icons to match the location "spacing" (it just has more whitespace). Added a little more id definitions. - [67fab54](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/67fab54)
- Moving singular classes to use the id property - [172e190](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/172e190)
- It helps to use the same pixel size that I've been testing forever - [d7a4b92](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/d7a4b92)
- Added some gravatar lovin, following Kendall's example - [cac7e12](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/cac7e12)
- Light corrections - [18a7a58](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/18a7a58)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.4...v1.0.5)

## v1.0.4 - March 3rd, 2016
- [#4](https://github.com/w0rd-driven/jsonresume-theme-ace/issues/4) - Correct CSS issues ([@w0rd-driven](https://github.com/w0rd-driven))
- Adding secondary print stylesheet that will need some styles from the main if it's to be used - [653fd2b](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/653fd2b)
- Added href content removal on print - [68c9632](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/68c9632)
- Matching the kendall theme's head section. Added comments to note the end of the main content blocks. - [ec26bef](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/ec26bef)
- Stripped protocol off CSS and scripts declarations. Removed the media="all" to follow other templates - [1a6f684](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/1a6f684)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.3...v1.0.4)

## v1.0.3 - March 3rd, 2016
- Adding print styling that isn't quite right. I see no colors in print preview for instance and the navbar is interesting when you try to print anywhere but the top of the page. - [574edb6](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/574edb6)
- Added moment package explicitly to hopefully handle theme errors. It's likely the theme server can't handle extra NPM packages or they need to be explicitly set, not a dependency on handlebars.moment for instance. - [4106a50](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/4106a50)
- Changing the navbar container to be fluid - [2abe163](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/2abe163)
- Added jquery and bootstrap javascript just in case. Changed the CSS to use media="all" to be explicit - [eec7649](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/eec7649)
- Using list-inline style instead of doing this manually - [b34b17a](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/b34b17a)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.2...v1.0.3)

## v1.0.2 - March 1st, 2016
- Readme adjusted to show segregated template. This could use a little work to explain the uniqueness of this template over the boilerplate - [478d2f6](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/478d2f6)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.1...v1.0.2)

## v1.0.1 - March 1st, 2016
- Adjusted body padding - [cb835fd](https://github.com/w0rd-driven/jsonresume-theme-ace/commit/cb835fd)

[Commits](https://github.com/w0rd-driven/jsonresume-theme-ace/compare/v1.0.0...v1.0.1)
