# ConceptBot media

The uploaded assets are served from this directory. Paths are configured in
`src/data/conceptbot.ts`. Rebuild after adding or replacing assets.

- `overview.mp4`: full project video below the hero (originally ConceptBot_video.mp4).
- `poster.webp`: title frame extracted from the overview video at one second.
- `architecture.png`: Figure 1, in Approach and as the social preview.
- `qualitative-risk.png`: Figure 2, in Why grounding matters and project cards.
- `deployment.png`: Figure 3, in Robot deployment.

The two diagram PNGs are losslessly re-encoded: identical dimensions and RGBA
pixels, with embedded diagram-editor metadata removed for faster downloads.
Their original uploads remain available in Git history. The MP4 is remuxed with
faststart for web playback without re-encoding its video or audio streams.

The overview uses native controls, inline playback, and starts paused with audio
available. It does not loop or autoplay, including with prefers-reduced-motion.
The reusable ProjectMedia component also supports MP4/WebM clips, muted/loop
options, and a labelled fallback when an image or a video/poster pair is missing.
Images can be opened at full resolution, including on mobile. Provide verified
captions as a WebVTT track if adding spoken narration that needs subtitles.
