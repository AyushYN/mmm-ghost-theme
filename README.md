# MMM Ghost Theme

Custom Ghost CMS theme for **Morigaon Mahila Mehfil (MMM)**, an NGO based in Morigaon, Assam, India.

Built as part of the **GHOSTED Program** — a collaboration between T4GC and OASIS.

## About MMM

Morigaon Mahila Mehfil has been working with women and children in Morigaon since 1979, running programmes in child protection, community mental health, women's empowerment, disaster risk reduction, and family counselling.

## Theme Features

- Fully dynamic — all content managed via Ghost Admin (Posts, Pages, Tags, Custom Settings)
- Zero hardcoded content — no images, text, or links in template files
- CMS-driven: hero slider, stat counters, programmes, testimonials, partners marquee, gallery, team, events, newsletters, timeline, VMG, core values, legal badges
- Dual-row animated partner logo marquee (row 1 scrolls right, row 2 scrolls left)
- Animated stat counters with Indian locale comma formatting
- PDF modal viewer for newsletters
- YouTube / image media handler on About page
- Animated timeline with progress line on About page
- Tab switching on Team page (Managing Committee / Staff)
- Gallery bento grid with pagination (7 per page) and lightbox
- Upcoming / past events separation
- Google Translate integration (EN / Assamese / Hindi / Bengali)
- prefers-reduced-motion respected throughout
- Fully responsive

## Ghost Version

Compatible with Ghost 5.x and Ghost 6.x

## Installation

1. Zip the theme folder:
   ```bash
   zip -r mmm-theme.zip . -x "*.git*" -x ".DS_Store" -x "node_modules/*"
   ```
2. Ghost Admin → Settings → Design → Change theme → Upload theme → select the zip
3. Upload routes.yaml: Ghost Admin → Settings → Labs → Routes → Upload routes

## Content Setup

See SETUP-GUIDE.md for the complete list of Pages, Posts, Tags, Navigation, and Custom Settings required to populate the theme.

## Built By

Ayush — GHOSTED Program, T4GC / OASIS | Final Year B.Tech CSE

## License

MIT
