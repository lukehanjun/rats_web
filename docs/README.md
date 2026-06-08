# RATs Project Website

This directory is a dependency-free GitHub Pages site. Configure GitHub Pages to
serve from the repository's `rats_web/docs/` directory.

## Replace Video Placeholders

Cut or export videos into `assets/videos/` using these names:

- `pipeline-overview.mp4`
- `real-world-01.mp4` through `real-world-03.mp4`
- `simulation-01.mp4` through `simulation-03.mp4`

The current page intentionally shows designed placeholders. Replace the matching
placeholder blocks in `index.html` with `<video controls playsinline>` elements
when the final clips are ready.

## Release Metadata

Before public release, replace:

- `Anonymous Authors`
- the disabled `arXiv soon` control
- the placeholder author field in the BibTeX entry
