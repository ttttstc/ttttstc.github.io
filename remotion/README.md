# Remotion product videos

The Typola and nimo pages use these four rendered videos from `../source/video/`:

- `typola-hero-loop.mp4` / `nimo-hero-loop.mp4`: 11-second seamless hero loops.
- `typola-film.mp4` / `nimo-film.mp4`: self-contained product films, about 27.5 seconds.
- Each MP4 has a same-name `-poster.webp` for the page's poster attribute.

All compositions render at 1280×720, 30 fps. Product labels and visual screens are marked as workflow illustrations. Motion is frame-driven with Remotion; no CSS animations are used. Typography matches the site: Playfair Display, Inter, JetBrains Mono, and Noto Serif/Sans SC for Chinese.

## Render

From this directory:

```bash
npm run typecheck
npm run render:typola-loop
npm run render:typola-film
npm run render:nimo-loop
npm run render:nimo-film
# or render all four in sequence
npm run render:all
```

The scripts use the composition IDs registered in `src/Root.tsx` and write to `../source/video/`.

## Refresh posters

Run these after the corresponding MP4 render. The loop posters sample the midpoint; film posters sample the final, held scene.

```bash
ffmpeg -y -ss 00:00:05.5 -i ../source/video/typola-hero-loop.mp4 -frames:v 1 -c:v libwebp -quality 84 ../source/video/typola-hero-loop-poster.webp
ffmpeg -y -ss 00:00:24.5 -i ../source/video/typola-film.mp4 -frames:v 1 -c:v libwebp -quality 84 ../source/video/typola-film-poster.webp
ffmpeg -y -ss 00:00:05.5 -i ../source/video/nimo-hero-loop.mp4 -frames:v 1 -c:v libwebp -quality 84 ../source/video/nimo-hero-loop-poster.webp
ffmpeg -y -ss 00:00:24.5 -i ../source/video/nimo-film.mp4 -frames:v 1 -c:v libwebp -quality 84 ../source/video/nimo-film-poster.webp
```

When changing product claims, check the current product page first. Keep examples explicitly marked as illustrations, preserve user approval before any file save or text write-back, and keep verification statuses bounded to the checks shown.
