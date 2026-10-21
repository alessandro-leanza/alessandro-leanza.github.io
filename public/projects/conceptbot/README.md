# ConceptBot media

Drop verified media into this directory, then rebuild. No fake images are included.
`src/data/conceptbot.ts` holds the paths. `ProjectMedia.astro` checks file presence
at build time and renders a labelled placeholder until an asset is available.

- `architecture.webp`: architecture figure, used in the hero and approach sections;
  also becomes the social preview image when present.
- `qualitative-risk.webp`: risk-sensitive comparison image.
- `deployment.webp`: simulation and physical deployment image.
- `risk-demo.mp4`: optional risk-sensitive comparison video.
- `deployment-demo.mp4`: optional deployment video.
- `poster.webp`: required poster before either video is rendered. Separate posters
  can be configured per media block when supplied.

Videos take priority over images only when both the video and its poster exist.
They have native controls, muted audio, loop, and playsinline. They start paused
(no autoplay), including with prefers-reduced-motion. WebM is also supported:
update the relevant path in src/data/conceptbot.ts to the supplied .webm filename.
Provide meaningful project-specific alt text when changing media or reusing the
component for another project. Caption any future video that includes speech.
