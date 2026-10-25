# Thuy Le — Brand Guidelines

Use this for **every** website, landing page, form and digital asset.
The feel: **warm, editorial, modern, feminine and confident**. Think bold Swiss typography (Helvetica Neue Bold) softened by milky neutrals, blush tones and lots of breathing room.

Inspiration: "The Functional Glow" palette (colours), the Sienna Hayes coaching site (layout), Helvetica Neue Bold posters (type), Studio Selkie's checklist (numbered rows with hairline rules).

---

## 1. Colour palette

Based on "The Functional Glow" palette, keeping our own deep brown for the darks.

| Swatch | Name | Hex | Role |
| --- | --- | --- | --- |
| ![](https://placehold.co/40x40/FBF7F4/FBF7F4.png) | **Milk** | `#FBF7F4` | **Main.** Page background, cards, form inputs |
| ![](https://placehold.co/40x40/E8D8CE/E8D8CE.png) | **Blush Oat** | `#E8D8CE` | **Main.** Hero, alternate sections, panels |
| ![](https://placehold.co/40x40/B98F88/B98F88.png) | **Dusty Rose** | `#B98F88` | **Pop.** One accent band per page, rules, icons, focus rings |
| ![](https://placehold.co/40x40/7A6258/7A6258.png) | **Cocoa Taupe** | `#7A6258` | **Pop.** Secondary text, the italic accent word, hover states |
| ![](https://placehold.co/40x40/2A1813/2A1813.png) | **Espresso** | `#2A1813` | **Dark.** Main text, primary buttons, the occasional dark section |
| ![](https://placehold.co/40x40/DCC8BC/DCC8BC.png) | Rule | `#DCC8BC` | Hairline dividers |

**Balance:** ~75% Milk + Blush Oat · ~15% Espresso (text, buttons, one or two dark sections such as the footer) · ~10% Dusty Rose + Cocoa Taupe as pops.

**Readability rules**
- Body text: **Espresso** on Milk / Blush Oat / Dusty Rose; **Milk** on Espresso.
- Secondary text: **Cocoa Taupe** on Milk or Blush Oat.
- **Dusty Rose is never small text on Milk or Blush Oat** (too faint) — use it as a background band, a line, an icon, or as text only on Espresso.
- No pure black (`#000`) or pure white (`#FFF`), no cool greys, no bright colours.

---

## 2. Typography

**One family: Helvetica Neue.** It's built into every iPhone and Mac (most of the Instagram audience), so it loads instantly. Everywhere else it falls back to **Instrument Sans** (free, Google Fonts), which is clean and slightly softer.

```css
font-family: "Helvetica Neue", "Instrument Sans", Helvetica, Arial, sans-serif;
```

| Role | Style | Example |
| --- | --- | --- |
| **Display / hero** | Bold 700, UPPERCASE, tight tracking (-0.025em), line-height ~0.95 | COME BUILD SOMETHING *exciting.* |
| **Feminine accent** | A word in the headline set in *Light Italic, lowercase* | *exciting.* / *can* / *and* |
| **Section heading (H2)** | Bold 700, sentence case, tracking -0.02em | Where you'll make an impact. |
| **Card / row title (H3)** | Bold 700, ~20–24px | Content & social media |
| **Label / eyebrow** | Medium 500, UPPERCASE, 11–12px, tracking 0.2em | NOW HIRING |
| **Lede** | Light 300, 20–26px | We're hiring a Part-Time… |
| **Body** | Regular 400, 16–17px, line-height 1.6 | Paragraph text |
| **Buttons** | Medium 500, UPPERCASE, 12–13px, tracking 0.16em | APPLY NOW |

**Never use:** serif fonts (Cormorant, Playfair, Georgia), script fonts, Inter, Poppins or Montserrat.
Minimum 16px for form inputs (prevents iPhone zoom).

---

## 3. Layout & components

- **Generous white space.** Sections: 72px padding on mobile, 112px on desktop. Max content width ~1120px; reading width ~720px.
- **Mobile first** — design for an iPhone in the Instagram in-app browser, then scale up.
- **Hairline rules** (1px Rule colour) to separate rows, facts and list items — editorial, not boxy.
- **Numbered rows** ("01", "02"…) in the Studio Selkie checklist style for lists of services, responsibilities or steps.
- **Colour blocking:** mostly Milk ↔ Blush Oat sections; one Dusty Rose accent band; Espresso for the occasional dark section and the footer.
- **Buttons:** nearly square (2px radius), uppercase, tracked.
  - Primary: Espresso background, Milk text → hover Cocoa Taupe.
  - Secondary: transparent, 1px Espresso border.
  - On dark sections: Blush Oat background, Espresso text.
- **Header:** small bold uppercase wordmark `THUY LE` with a thin divider, and one Apply/CTA button.
- **No stock photos, fake testimonials or emoji.** Real photos of Thuy only, in warm, soft tones.

---

## 4. Voice

Warm, direct, ambitious. First person from Thuy ("I'd love to hear from you"). Exciting but honest — never overpromise, never sound corporate.

---

## 5. For developers / Claude

Start every new page from `brand/tokens.css`. The careers site (`careers-site/styles.css`) is the reference implementation of this guide.
