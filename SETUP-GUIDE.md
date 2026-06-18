# Morigaon Mahila Mehfil - Theme Setup Guide (v3)

This theme is **100% content-driven**. It ships with **no images** (just SVG/gradient
placeholders), so every photo comes from Ghost - keeping the theme tiny and fully
editable by non-technical admins. Fill in the four areas below and the whole site
populates itself: **Custom Settings -> Navigation -> Pages -> tagged Posts**.

Sections hide automatically when their feed is empty, so the site never looks broken.

---

## 1. Custom Settings
Ghost Admin -> **Settings -> Design -> Customize -> Site-wide**. These are the only
editable fields (everything else is Pages/Posts):

- **Logo** - navbar & footer logo (falls back to Settings -> General logo)
- **Hero eyebrow / headline / subtext** - the fallback hero (used until you add slider posts)
- **About image 1 / 2 / 3** - homepage "Who We Are" photo collage
- **Footer tagline / Footer reg line**
- **Contact email / phone / address / map embed URL** (Google Maps -> Share -> Embed -> copy the `src` URL)
- **Donate UPI id / Donate CTA url** (e.g. an external payment link)
- **Facebook / YouTube / Instagram / WhatsApp** (WhatsApp = digits only, e.g. `919435164216`)

Also set under **Settings -> General**: Site title, Description (used in the About block),
Publication logo, and Publication cover (hero fallback background).

---

## 2. Navigation
**Settings -> Navigation** -> Primary. Prefix a label with `- ` (dash + space) to make it a dropdown child of the item above it. Don't add "Donate" - it's a fixed CTA button.

| Label | URL |
|---|---|
| Home | `/` |
| About | `/about/` |
| Programmes | `/programs/` |
| `- Adoption (SAA)` | `/saa/` |
| `- Mental Health (CMHP)` | `/cmhp/` |
| `- Jagaran` | `/jagaran/` |
| `- Disaster Response` | `/drr/` |
| `- Family Counselling` | `/sewa/` |
| Impact | `/impact/` |
| News | `/news/` |
| More | `#` |
| `- Our Team` | `/team/` |
| `- Awards` | `/awards/` |
| `- Get Involved` | `/get-involved/` |
| `- Legal` | `/legal-status/` |
| `- Contact` | `/contact/` |

---

## 3. Pages (set the Template in Page settings -> Template)

| Page | Slug | Template |
|---|---|---|
| Home | `home` | (default) - then Settings -> make this the homepage *(optional - routes.yaml already maps `/`)* |
| About | `about` | Custom About |
| Programmes | `programs` | Custom Programs |
| Adoption (SAA) | `saa` | (default) |
| Mental Health | `cmhp` | (default) |
| Jagaran | `jagaran` | (default) |
| Disaster Response | `drr` | (default) |
| Family Counselling | `sewa` | (default) |
| Impact | `impact` | Custom Impact |
| Our Team | `team` | Custom Team |
| Awards | `awards` | Custom Awards |
| Legal Status | `legal-status` | Custom Legal |
| Donate | `donate` | Custom Donate |
| Get Involved | `get-involved` | Custom Get Involved |
| Contact | `contact` | Custom Contact |

> The five programme pages use the default page layout (hero + your page body + CTA).
> Put each programme's description in the page body.

---

## 4. Tagged Posts (the dynamic feeds)
Create posts and tag them with the **exact slug** below. For most feeds: **Title** = heading,
**Feature image** = photo, **Excerpt** (Post settings) = the short line on the card.

| Tag slug | Powers | Notes |
|---|---|---|
| `hero-slider` | Homepage hero slides | Title=headline, Excerpt=subtext, Feature image=background, **Facebook title**=button link. 2-4 posts. |
| `home-programs` | Homepage + Programmes cards | Title, Excerpt, Feature image, **Facebook title**=link (e.g. `/cmhp/`). |
| `success-stories` | Homepage + Impact + `/tag/success-stories/` | Title, Excerpt (card), Content (full story), Feature image. |
| `home-testimonials` | Homepage quotes | Title=name, Excerpt=quote, first tag=role (e.g. "Beneficiary"), Feature image=photo. |
| `home-partners` | Funders/partners marquee | **One** post containing a Ghost **Gallery card** of logos. |
| `home-gallery` | Homepage gallery + lightbox | **One** post containing a Ghost **Gallery card** of photos. |
| `milestones` | About timeline | Title=year, Excerpt=description. Set publish date to Jan 1 of that year for correct order. |
| `team-board` | Team page - Committee | Title=name, Excerpt=role, Feature image=photo. |
| `team-staff` | Team page - Staff | Title=name, Excerpt=role, Feature image=photo. |
| `awards` | Awards page | Title=award, Excerpt=detail. |
| `legal-docs` | Legal page (optional override) | Title=registration, Excerpt=number. |
| `home-stats` | Homepage ribbon counters + About "By the Numbers" | Title = number (e.g. 5,723), Excerpt = label. 4 posts. Order = position left to right. |
| `about-points` | Homepage "Who We Are" bullet points | Title = bold heading, Excerpt = description. 3 posts. |
| `impact-stats` | Homepage impact counter grid (6 icons) | Title = number, Excerpt = label. 6 posts. Order = position matches icon slot. |
| `vmg` | About page Vision / Mission / Goals cards | Title = card heading, Excerpt = paragraph. Goals post: put bullet list in post body. 3 posts. |
| `our-values` | About page Core Values grid | Title = value name, Excerpt = description. 6 posts. |

Legal badges are edited in Ghost Admin → Settings → Design → Customize → Footer reg line. Separate each badge with · (space-middot-space). Example: Societies Reg. · 12A · 80G · FCRA · CSR · NITI Aayog · JJ Act 2015 · SAA Recognition. Add or remove certifications at any time without touching code.

Each "Facebook title" field is in **Post settings -> Meta data -> Facebook title**;
the theme reads it as a button/card link.

---

## 5. Upload routes
Ghost Admin -> **Settings -> Labs -> Routes -> Upload** the `routes.yaml` from this theme.
It maps `/` to the homepage layout and adds a paginated `/news/` archive.

---

### Notes
- **No images are bundled** - every placeholder is a clean branded gradient/SVG until you
  add a photo. Add images progressively; nothing breaks while they're missing.
- Counters animate on scroll; the language button (bottom-right) switches
  English / Assamese / Hindi / Bengali via Google Translate.
- Keep tag slugs exactly as listed - the theme fetches by slug.
