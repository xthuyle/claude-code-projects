# Thuy Le — Brand Guidelines

Use this for **every** website, landing page, form and digital asset.
The feel: **warm, editorial, modern, feminine and confident**. Think bold Swiss typography (Helvetica Neue Bold) softened by warm browns, creams and lots of breathing room.

Inspiration: the Sienna Hayes coaching site (colours, layout), Helvetica Neue Bold posters (type), Studio Selkie's checklist (numbered rows with hairline rules).

---

## 1. Colour palette

| Swatch | Name | Hex | Use it for |
| --- | --- | --- | --- |
| ![](https://placehold.co/40x40/2A1813/2A1813.png) | **Espresso** | `#2A1813` | Main text, dark sections, primary buttons |
| ![](https://placehold.co/40x40/4B3329/4B3329.png) | **Cocoa** | `#4B3329` | Hover states, secondary dark surfaces |
| ![](https://placehold.co/40x40/9E8770/9E8770.png) | **Mocha** | `#9E8770` | Hero / feature blocks, large accents |
| ![](https://placehold.co/40x40/C8B6A1/C8B6A1.png) | **Latte** | `#C8B6A1` | Buttons and lines on dark sections, tags |
| ![](https://placehold.co/40x40/E9DFD2/E9DFD2.png) | **Sand** | `#E9DFD2` | Alternate section background |
| ![](https://placehold.co/40x40/F5EEE6/F5EEE6.png) | **Cream** | `#F5EEE6` | Page background |
| ![](https://placehold.co/40x40/FBF8F4/FBF8F4.png) | **Linen** | `#FBF8F4` | Cards, form inputs |
| ![](https://placehold.co/40x40/6F6157/6F6157.png) | **Stone** | `#6F6157` | Secondary / muted text |
| ![](https://placehold.co/40x40/D8CBBB/D8CBBB.png) | **Rule** | `#D8CBBB` | Hairline dividers |

**Rough balance:** 60% cream/linen/sand · 25% espresso · 15% mocha/latte.

**Readability rules**
- Body text is always **Espresso** or **Stone** on light backgrounds, and **Cream** on Espresso.
- **Mocha is a background or very large display colour**, never small text on cream (too faint).
- On a Mocha block, text is Espresso.
- No pure black (`#000`) or pure white (`#FFF`) — use Espresso and Linen instead.
- No cool greys, blues or bright accent colours.

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
- **Colour blocking:** alternate Cream → Sand → Espresso sections; one Mocha feature block (usually the hero).
- **Buttons:** nearly square (2px radius), uppercase, tracked.
  - Primary: Espresso background, Cream text → hover Cocoa.
  - Secondary: transparent, 1px Espresso border.
  - On dark sections: Latte background, Espresso text.
- **Header:** small bold uppercase wordmark `THUY LE` with a thin divider, and one Apply/CTA button.
- **No stock photos, fake testimonials or emoji.** Real photos of Thuy only, in warm tones.

---

## 4. Voice

Warm, direct, ambitious. First person from Thuy ("I'd love to hear from you"). Exciting but honest — never overpromise, never sound corporate.

---

## 5. For developers / Claude

Start every new page from `brand/tokens.css`. The careers site (`careers-site/styles.css`) is the reference implementation of this guide.
