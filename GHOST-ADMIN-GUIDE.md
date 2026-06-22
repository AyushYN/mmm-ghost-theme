# Morigaon Mahila Mehfil — Ghost Admin Guide
### How to manage your website (No technical knowledge needed)

---

## PART 1 — The Basics: What is Ghost Admin?

Ghost Admin is your website's control panel. You open it by going to:
**`your-site.ghost.io/ghost`**

Login with your email and password. Everything on the website — text, photos, numbers, team members, stories — is managed from here. You never need to touch any code.

---

## PART 2 — The Two Things You Work With

Everything in Ghost is either a **Post** or a **Page**.

| | Post | Page |
|---|---|---|
| What it is | An article or content item | A standalone page |
| Example | A success story, a stat, a team member | The About page, Legal page |
| Has a tag? | Yes — tags control where it appears | Sometimes |
| Published date? | Yes — controls display order | No |

**The golden rule:** The tag on a post decides which section of the website it appears in. Get the tag right and the content shows up automatically.

---

## PART 3 — Navigation (The Menu Bar)

Go to **Ghost Admin → Settings → Navigation**

The menu has two parts:

### Primary Navigation (top menu bar)
Add items like this — Label on left, URL on right:

```
Home                /
About               /about/
Programs            /programs/
- Adoption (SAA)    /saa/
- Mental Health     /cmhp/
- Jagaran           /jagaran/
- Disaster DRR      /drr/
- Family SEWA       /sewa/
Impact              /impact/
More                #
- Our Team          /team/
- Awards            /awards/
- Get Involved      /get-involved/
- Legal             /legal-status/
- Contact           /contact/
Donate              /donate/
```

**Important rules:**
- Items starting with `-` (a plain hyphen) become dropdown children of the item above them
- "Donate" is automatically removed from the list and shown as the red button
- Every URL must have a trailing slash: `/about/` not `/about`
- The `#` URL means "no link" — used for dropdown parent labels like "More"

### Secondary Navigation (footer Programmes column)
Add your programme pages here — they appear in the footer under "Programmes":
```
Adoption (SAA)      /saa/
Mental Health       /cmhp/
Jagaran             /jagaran/
Disaster Response   /drr/
Family Counselling  /sewa/
```

---

## PART 4 — Design Settings (Logo, Colours, Contact Info)

Go to **Ghost Admin → Settings → Design → Customize**

These are the settings you can change anytime:

| Setting | What it changes |
|---------|----------------|
| **Logo** | The logo in the navbar and footer |
| **Hero Eyebrow** | Small text above the homepage headline (e.g. "Morigaon, Assam · Serving Since 1979") |
| **Hero Headline** | Main big text on the homepage |
| **Hero Subtext** | Paragraph below the headline |
| **About Image 1** | Left tall photo in the homepage collage |
| **About Image 2** | Top right photo in the homepage collage |
| **About Image 3** | Bottom right photo in the homepage collage |
| **About Media URL** | YouTube video link OR image URL shown on the About page |
| **Footer Tagline** | Text under the logo in the footer |
| **Footer Reg Line** | Registration numbers shown in footer (separate with ·) |
| **Contact Email** | Email shown on Contact page and footer |
| **Contact Phone** | Phone shown on Contact page and footer |
| **Contact Address** | Address shown on Contact page and footer |
| **Contact Map Embed URL** | Google Maps embed link (paste from Google Maps → Share → Embed) |
| **Donate CTA URL** | Where the Donate button goes |
| **Facebook URL** | Your Facebook page link |
| **YouTube URL** | Your YouTube channel link |
| **Instagram URL** | Your Instagram profile link |
| **WhatsApp Number** | Your WhatsApp number (digits only, with country code, e.g. 919435164216) |

Also set these in **Ghost Admin → Settings → General:**
- **Site Title** — Your organisation name
- **Site Description** — One-line description (shown on homepage)
- **Cover Image** — Homepage hero background (fallback if no hero-slider posts)

---

## PART 5 — Complete Tag Reference

This is the most important section. Each tag controls a specific section of the website.

---

### HOME PAGE SECTIONS

#### 🎯 Hero Slider (rotating banner at the top)
**Tag:** `hero-slider`
- **Title** = Big headline text on the slide
- **Excerpt** = Subtext below the headline
- **Feature Image** = Background photo
- **Facebook Title (og_title)** = URL the "Learn More" button goes to
- Add up to 6 posts. If none exist, the homepage uses the Design Settings instead.

#### 📊 Stat Ribbon (numbers bar below hero)
**Tag:** `home-stats`
- **Title** = The number (e.g. `5,723` or `17,600+`)
- **Excerpt** = The label below the number (e.g. "Patients enrolled")
- Add up to 4 posts. Publish in order — first published = first shown.
- These same stats also appear on the About page.

#### 🔵 About Bullet Points (homepage "Who We Are" section)
**Tag:** `about-points`
- **Title** = Bold text (e.g. "Child Protection")
- **Excerpt** = Description after the dash
- Add up to 3 posts.

#### 🟦 Programme Cards / Bento Grid (homepage "What We Are Doing")
**Tag:** `home-programs`
- **Title** = Programme name
- **Excerpt** = Short description
- **Feature Image** = Card background photo
- **Primary Tag** = Overline label shown above the title
- **Facebook Title (og_title)** = URL when someone clicks the card
- Add up to 5 posts for the bento grid. These same posts also appear on the Programs page as editorial rows.

#### 📈 Impact Counters (homepage impact section)
**Tag:** `impact-stats`
- **Title** = Number (e.g. `138` or `1,500+`)
- **Excerpt** = Label (e.g. "Children in our care")
- Add up to 6 posts. These same posts also appear on the Impact page.

#### 💬 Testimonials / Quotes
**Tag:** `home-testimonials`
- **Title** = Person's name
- **Excerpt** = The quote text
- **Primary Tag** = Role/title (e.g. "Programme Beneficiary")
- **Feature Image** = Person's photo (optional)
- Add up to 6 posts.

#### 🤝 Partners / Funders Marquee
**Tag:** `home-partners`
- Create **one post** with this tag
- In the post body, insert a **Gallery card** and upload all partner logos
- The logos scroll automatically in two rows
- This same post also appears on the About page partners section

#### 🖼️ Homepage Gallery
**Tag:** `home-gallery`
- Create **one post** with this tag
- In the post body, insert a **Gallery card** and upload all photos
- Shows as a bento photo grid on the homepage

#### ✅ Call to Action Banner (green banner at bottom of every page)
**Tag:** `site-cta`
- Create **one post** with this tag
- **Title** = Heading (e.g. "Be a Part of the Change")
- **Excerpt** = Supporting text below the heading
- The Donate and Get Involved buttons are automatic

---

### ABOUT PAGE SECTIONS

#### 👁️ Vision / Mission / Goals
**Tag:** `vmg`
- **Title** = Card heading (e.g. "Our Vision", "Our Mission", "Our Goals")
- **Excerpt** = Short description paragraph
- **Post Body** = For the Goals card, add a bullet list — it renders in place of the excerpt
- Add exactly 3 posts (published in order: Vision → Mission → Goals)

#### 💎 Core Values
**Tag:** `our-values`
- **Title** = Value name (e.g. "Compassion", "Integrity")
- **Excerpt** = One-line description
- Add up to 6 posts.

#### 🕐 Timeline / Milestones
**Tag:** `milestones`
- **Title** = Year (e.g. `1979`, `1985`)
- **Excerpt** = What happened that year
- **Feature Image** = Optional photo for that milestone
- Add as many as needed. Earliest published date = earliest milestone.

#### 🌟 Leadership Quote Strip (About page)
Uses the **first** post tagged `home-testimonials` — same posts as the homepage testimonials.

---

### PROGRAMMES PAGE

#### 📋 Programme Rows
**Tag:** `home-programs` (same as homepage)
- The Programs page shows these as large editorial rows with alternating image/text layout
- **Primary Tag name** = Overline label (e.g. "Child Protection")
- **Facebook Title (og_title)** = Link to the individual programme page

#### ⚙️ Process Timeline (How It Works)
**Tag:** `#process` *(internal tag — add as `#process`)*
- **Title** = Step name (e.g. "Identification", "Assessment")
- **Post Body** = Step description
- **Primary Tag** = Step category label
- Add posts in order.

---

### INDIVIDUAL PROGRAMME PAGES
*(SAA, CMHP, Jagaran, DRR, SEWA)*

Each programme page has its own set of tags. Replace `{slug}` with the page slug:
- SAA page slug = `saa`
- CMHP page slug = `cmhp`
- Jagaran page slug = `jagaran`
- DRR page slug = `drr`
- SEWA page slug = `sewa`

| Tag pattern | What it shows | Example for SAA |
|-------------|--------------|----------------|
| `{slug}-activities` | "What We Do" activity cards | `saa-activities` |
| `{slug}-album` | Photo gallery on that programme page | `saa-album` |
| `{slug}-stories` | Success stories from that programme | `saa-stories` |

For activities: **Title** = Activity name, **Excerpt** = Description, **Feature Image** = Photo

For album: Create **one post** with tag `saa-album`, add a Gallery card in the body with photos.

---

### IMPACT PAGE

#### 📊 Impact Counters
**Tag:** `impact-stats` (same as homepage — same posts appear on both)

#### 🖼️ Impact Overview Section (image + text block)
This comes from a **Page** (not a post):
- Go to **Pages → New Page**
- **Slug:** `impact-overview`
- **Title** = Section heading
- **Post Body** = Editorial text
- **Feature Image** = The photo shown beside the text

---

### TEAM PAGE

#### 👑 Leaders / Founders (large split cards)
**Tag:** `team-leaders`
- **Title** = Person's full name
- **Primary Tag name** = Role/designation (e.g. "President", "Secretary")
- **Feature Image** = Portrait photo
- **Excerpt** = Short biography
- Publish in order. Even-numbered posts flip the layout (photo on right).

#### 🏛️ Managing Committee
**Tag:** `team-board`
- **Title** = Member's name
- **Primary Tag name** = Designation
- **Feature Image** = Photo
- **Excerpt** = Can be used as designation if no primary tag

#### 👷 Staff & Field Team
**Tag:** `team-staff`
- **Title** = Staff member's name
- **Excerpt** = Designation / role
- **Feature Image** = Photo (optional)

**Note:** The Team page hero background comes from the **page's own Feature Image** (set in the Team page settings).

---

### AWARDS PAGE

#### 🏆 Awards
**Tag:** `awards`
- **Title** = Award name (e.g. "Chief Minister's Best Community Action Award")
- **Excerpt** = Details / citation
- **Publish Date** = The year of the award (this shows as the year on the card)
- **Feature Image** = Photo of certificate or trophy

---

### NEWSLETTERS / ANNUAL REPORTS PAGE

#### 📄 Newsletters & Annual Reports
**Tag:** `newsletter`
- **Title** = Report name (e.g. "Annual Report 2023-24")
- **Excerpt** = Short description
- **Feature Image** = Cover thumbnail
- **Post Body** = Upload the PDF using a **File card** (type `/` → File → upload PDF)
- Clicking "View PDF" opens the PDF in the browser

---

### DONATE PAGE

#### 🖼️ Donate Page Photo Grid (4 background images)
**Tag:** `#donate-grid` *(internal tag — type as `#donate-grid`)*
- Create 4 posts, each with a **Feature Image**
- **Title** = Alt text for the image

#### 📊 Donate Page Stats Banner
**Tag:** `#stats` *(internal tag — type as `#stats`)*
- **Title** = Number (e.g. `45+`)
- **Post Body** = Description text

#### 🏦 Bank Details / Payment Info
- Edit directly in the **Donate page body** in Ghost Admin → Pages → Donate
- Add bank details, UPI info, etc. as text in the page editor

#### 🎁 Donation Tiers
- Go to **Pages → New Page**
- **Slug:** `our-donate-tiers`
- Add your gift tier options in the page body

#### 💳 QR Code on Donate Page
- Upload the QR code image as the **Donate page's Feature Image**

---

### GET INVOLVED PAGE

#### 🙌 Involvement Options (3 cards)
**Tag:** `get-involved`
- Create 3 posts (published in order — first = first card)
- **Title** = Card heading (e.g. "Volunteer With Us", "Partner With Us", "Spread the Word")
- **Excerpt** = Description
- **Feature Image** = Background photo for the card
- **Facebook Title (og_title)** = URL the "Learn more" link goes to

---

### CONTACT PAGE

All contact info comes from **Design Settings** (see Part 4):
- Address, phone, email, social media links, map embed

---

### LEGAL PAGE

#### 📜 Legal / Registration Details
- Go to **Pages → New Page**
- **Slug:** `our-legal`
- Add registration numbers, acts, certificates in the page body

---

### GALLERY (Community Carousel on About page)

**Two ways to add photos:**

**Way 1 — Bulk upload (recommended):**
1. Pages → New Page
2. Slug: `community-gallery`
3. Give it a title (e.g. "Gallery")
4. In the editor, type `/` → Gallery → upload all photos at once
5. Publish

**Way 2 — One photo at a time:**
- Tag: `#gallery` *(internal tag)*
- Create one post per photo
- Set the **Feature Image** = the photo
- Title = caption/alt text

---

## PART 6 — Pages Reference

These pages must exist with the exact slugs listed:

| Page | Slug | Template | Purpose |
|------|------|----------|---------|
| Home | *(homepage)* | Home | Main homepage |
| About | `about` | About | About the organisation |
| Programs | `programs` | Programs | All programmes overview |
| Impact | `impact` | Impact | Impact stats and stories |
| Our Team | `team` | Team | Committee and staff |
| Awards | `awards` | Awards | Recognition and awards |
| Contact | `contact` | Contact | Contact form and info |
| Donate | `donate` | Donate | Donation details |
| Get Involved | `get-involved` | Get Involved | Volunteer / partner |
| Legal Status | `legal-status` | Legal | Registrations |
| Newsletters | `newsletters` | Newsletters | Reports and publications |
| Adoption (SAA) | `saa` | Programme | SAA programme page |
| Mental Health | `cmhp` | Programme | CMHP programme page |
| Jagaran | `jagaran` | Programme | Jagaran programme page |
| Disaster DRR | `drr` | Programme | DRR programme page |
| Family Counselling | `sewa` | Programme | SEWA programme page |

**Special pages (content-only, no custom template needed):**

| Page | Slug | What to put in body |
|------|------|-------------------|
| Impact Overview | `impact-overview` | Text + Feature Image |
| Donate Tiers | `our-donate-tiers` | Gift tier descriptions |
| Legal Content | `our-legal` | Registration details |
| Community Gallery | `community-gallery` | Gallery card with photos |

---

## PART 7 — How to Set a Template on a Page

When you create or edit a page in Ghost Admin:
1. Look on the right sidebar
2. Find **Template**
3. Select the right template from the dropdown

| Page | Template to select |
|------|-------------------|
| About | About |
| Programs | Programs |
| Impact | Impact |
| Our Team | Team |
| Awards | Awards |
| Contact | Contact |
| Donate | Donate |
| Get Involved | Get Involved |
| Legal Status | Legal |
| Newsletters | Newsletters |
| SAA / CMHP / Jagaran / DRR / SEWA | Programme |
| All other special pages | Default |

---

## PART 8 — Success Stories

**Tag:** `success-stories`

Success stories appear on the homepage and Impact page.

- **Title** = Person's name or story headline
- **Excerpt** = Short summary (shown on the card)
- **Feature Image** = Photo
- **Post Body** = Full story text
- **Primary Tag** = Category label shown on the card (e.g. "Mental Health")

To see all stories: `your-site.ghost.io/tag/success-stories/`

---

## PART 9 — Quick Checklist for a Fresh Setup

Complete these in order:

**Settings first:**
- [ ] Ghost Admin → Settings → General → Set site title, description, cover image
- [ ] Ghost Admin → Settings → Design → Upload logo
- [ ] Ghost Admin → Settings → Design → Customize → Fill all contact details, social links, hero text
- [ ] Ghost Admin → Settings → Navigation → Set primary and secondary navigation

**Then create these posts (one section at a time):**
- [ ] 1–4 posts tagged `home-stats` (key numbers)
- [ ] 1–6 posts tagged `impact-stats` (impact numbers)
- [ ] 1–5 posts tagged `home-programs` (programmes)
- [ ] 1 post tagged `home-partners` (with logo Gallery card)
- [ ] 1 post tagged `home-gallery` (with photo Gallery card)
- [ ] 1 post tagged `site-cta` (CTA banner text)
- [ ] 3 posts tagged `vmg` (Vision, Mission, Goals)
- [ ] 1–6 posts tagged `our-values`
- [ ] Posts tagged `milestones` (one per year)
- [ ] Posts tagged `team-leaders`, `team-board`, `team-staff`
- [ ] Posts tagged `awards`
- [ ] Posts tagged `success-stories`
- [ ] Posts tagged `newsletter` (with PDF attachments)
- [ ] 3 posts tagged `get-involved`
- [ ] 1–6 posts tagged `home-testimonials`

**Then create/update these pages:**
- [ ] All main pages exist with correct slugs and templates
- [ ] `impact-overview` page created
- [ ] `our-legal` page created with registration info
- [ ] `community-gallery` page created with photos
- [ ] Programme pages (saa, cmhp, jagaran, drr, sewa) created with content

---

## PART 10 — Internal Tags (Hidden Tags)

These tags start with `#` and are NOT shown publicly on the website. They are for organising behind-the-scenes content.

| Internal Tag | What it does |
|-------------|-------------|
| `#gallery` | Photos for the community carousel on About page |
| `#donate-grid` | Background images on the Donate page |
| `#stats` | Stats banner on the Donate page |
| `#process` | Process/How-It-Works timeline on Programs page |

To add an internal tag: in the Tags field, type `#` followed by the tag name (e.g. `#gallery`). Ghost will show it in grey to indicate it's internal.

---

## PART 11 — Frequently Asked Questions

**Q: I added a post but it's not showing on the website.**
A: Check the tag. Copy it exactly — tags are case-sensitive. `home-stats` ≠ `Home-Stats`.

**Q: The numbers on the homepage are wrong.**
A: Edit the post tagged `home-stats` or `impact-stats`. Change the **Title** to the new number.

**Q: How do I change the hero background photo?**
A: Either (a) edit the feature image of the first post tagged `hero-slider`, or (b) go to Settings → General and change the Cover Image (used as fallback).

**Q: How do I add a new team member?**
A: Create a new Post, add tag `team-board` (or `team-staff`), set the Title as their name, Excerpt as their role, and Feature Image as their photo. Publish.

**Q: How do I update the phone number?**
A: Ghost Admin → Settings → Design → Customize → Contact Phone.

**Q: How do I add a new programme page?**
A: Create a Page with the slug (e.g. `new-programme`), select Template = Programme. Then create posts tagged `new-programme-activities` for the activities section.

**Q: Can I change the order posts appear in?**
A: Yes. The Publish Date controls order. Earlier published = shown first (for ascending order sections). You can change the publish date even after publishing — click on the date in the post editor.

**Q: How do I add a PDF annual report?**
A: Create a Post, tag it `newsletter`, set Feature Image as the cover, then in the post body type `/` → select **File** → upload your PDF. Publish.

---

*This guide covers everything managed through Ghost Admin for the Morigaon Mahila Mehfil website. No coding required for any of the above.*
