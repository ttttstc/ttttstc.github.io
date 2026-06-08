# Brand Spec — 泥巴猪的实验田 (warm / Anthropic-editorial)

Extracted from **dailydispatch.app** (primary, real CSS values), blended with
**ginonotes.com** reading layout and **open-design.ai** paper-canvas posture.

## Color tokens (source hex → OKLch)

| Token        | Role                       | Source hex  | OKLch |
|--------------|----------------------------|-------------|-------|
| `--bg`       | page background (cream)    | `#ece4d9`   | `oklch(91% 0.014 78)` |
| `--surface`  | body surface / sections    | `#f4f0ea`   | `oklch(95% 0.010 80)` |
| `--card`     | card / warm white          | `#fffbf5`   | `oklch(99% 0.006 85)` |
| `--fg`       | ink / heading + body text  | `#4f483e`   | `oklch(36% 0.017 70)` |
| `--muted`    | secondary text / meta      | `#8a7d6b`   | `oklch(58% 0.020 75)` |
| `--border`   | hairline borders           | `#e2d8cb`   | `oklch(88% 0.016 78)` |
| `--accent`   | primary accent (orange)    | `#f54001`   | `oklch(63% 0.215 35)` |
| `--accent-soft` | light orange wash       | `#ffc198`   | `oklch(83% 0.080 55)` |
| `--blue`     | rare 2nd signal (links/tags)| `#54a2ff`  | `oklch(70% 0.140 255)` |

Shadows (warm, soft, never harsh black):
- card: `0 8px 40px rgba(79,72,62,.08), 0 2px 20px rgba(79,72,62,.04)`
- hover: `0 16px 64px rgba(79,72,62,.12)`

## Typography

- **Display / headings:** `'Playfair Display', Georgia, serif` (400–900, italic available)
- **Body / UI:** `'Inter', -apple-system, system-ui, sans-serif` (300/400/500/600)
- **Mono / meta / code:** `'JetBrains Mono', ui-monospace, monospace` (400/500)
- Google Fonts: Playfair Display + Inter + JetBrains Mono

Type scale (from source): xxl 60 / xl 40 / lg 32 / md 28 / sm 24 · body 16 · meta 13–14.
Reading column (ginonotes): single column, ~680–720px max, line-height 1.75 for article body.

## Layout posture rules

1. Warm cream canvas everywhere — never white-white; cards are `--card` warm white on `--bg`.
2. Hairline `--border` + generous whitespace do the structural work. Minimal shadow, soft & warm only.
3. Radii are gentle: 10–16px on cards/buttons, never pill-everything.
4. ONE accent (orange) used sparingly — eyebrow kickers, one CTA, active states. Blue is a rare 2nd signal for tags/links only.
5. Serif Playfair for headlines + eyebrows; Inter for everything functional; mono for dates/labels/tags (uppercase, letter-spaced).
6. Editorial rhythm: large serif headline, mono kicker above it, comfortable measure, real imagery cropped generously.
7. No purple gradients, no emoji icons, no left-border accent cards, no AI-slop. Warmth comes from the cream palette + serif, not from beige gradients.
