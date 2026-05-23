# StreakTap Landing Page — Customization Brief

You are working in a fork of [once-ui-system/magic-portfolio](https://github.com/once-ui-system/magic-portfolio), a Next.js + Once UI personal-portfolio template. Your task is to convert it into a **product landing page for StreakTap**, an iOS habit-tracking app.

This brief is self-contained. Read it end-to-end before making changes. When something is ambiguous, prefer the simpler choice — that matches the product.

---

## 1. About the product

**StreakTap** is an extremely simple habit-tracking app for iOS.

- Users create habits by name, tap once a day to mark commitment, and build streaks.
- That is the entire product.

**What it deliberately does not do** (do not invent these on the landing page):
- No social features, no sharing, no friends, no leaderboards
- No analytics or dashboards beyond streak counts
- No gamification (badges, points, XP, rewards)
- No AI, no coaching, no notifications-as-a-feature
- No accounts, no cloud sync as a headline feature (it's a local-first app)

**Product principles** (reflect these in copy and visual choices):
- Simplicity over features
- Speed over flexibility
- Clarity over customization
- Function over decoration

---

## 2. Voice and tone

- Calm, confident, understated. Apple-marketing-adjacent but without superlatives.
- Short sentences. Concrete verbs. No hype words ("revolutionary," "game-changing," "powerful," "seamless," "unleash").
- No emoji in copy. No exclamation marks.
- Talk about the user's day, not the app's features.

**Approved tagline candidates** (pick one for hero, the other can appear elsewhere):
1. *One tap. Every day. That's it.*
2. *The simplest way to build a habit.*

**Approved supporting line:**
> StreakTap is a habit tracker with one job: help you show up every day, without distractions.

---

## 3. Visual design system

The app itself is monochrome and minimal. The landing page must feel like the same product.

### Theme
- **Default to a clean light theme** with an optional dark mode toggle (template already supports it; keep the toggle, do not feature it).
- Background: near-white (`#FAFAFA` or pure white `#FFFFFF`).
- Foreground / text: near-black (`#0A0A0A` or `#111`).
- Accent: **none by default**. Where the template requires an accent color, use neutral gray. The only place color is allowed is in screenshot imagery (which will show colorful habit chips — that's fine).

### Typography
- Keep the template's variable sans-serif (Geist or whatever ships) for body.
- Headings: same family, tighter letter spacing (`-0.03em` on display sizes).
- Generous line height (1.5–1.6 for body, 1.05–1.15 for display).
- Display sizes should be **big and confident** — hero headline `clamp(48px, 8vw, 96px)`.

### Spacing & layout
- Generous whitespace. Vertical rhythm of at least 96–160px between major sections.
- Max content width ~720px for prose, ~1100px for sectioned layouts.
- No drop shadows on UI chrome. Soft shadows are acceptable on phone-screenshot mockups only.
- No gradients except a very subtle one behind the hero phone if needed.

### Once UI tokens
The template uses Once UI's design tokens (`onceui/config.js` or similar). Override the theme to a neutral monochrome palette there rather than fighting it per-component. Set:
- `brand` → neutral gray scale
- `accent` → neutral gray scale (effectively disable accent)
- `neutral` → keep as-is
- `solid` / `solidStyle` → flat
- `border` → conservative
- `surface` → translucent
- Rounded corners: medium (12–16px on cards, full on pill buttons)

---

## 4. Site structure

The template ships with multiple sections (Home, About, Work, Blog, Gallery). **Most of these are dead weight for a product landing page.** Treat the list below as the source of truth.

### Keep and transform
| Template route | New purpose |
|---|---|
| `/` (Home) | The landing page — hero, features, how it works, philosophy, FAQ, CTA |
| `/privacy` (add if missing) | Privacy policy stub |
| `/terms` (add if missing) | Terms of use stub |

### Remove (delete routes, components, content files, nav entries)
- `/about` (personal bio page)
- `/work` and individual project MDX entries
- `/blog` and individual post MDX entries
- `/gallery`
- Any "newsletter" / "subscribe" components
- Social-link rows that reference the original author (Twitter, GitHub, LinkedIn, Threads, etc.) — replace with a single contact email link in the footer

When you delete a route, also remove it from the navigation config (often in `src/resources/config.js` or `src/app/resources/`) and from any sitemap helpers.

---

## 5. Page-by-page content

All copy below is final-ish — you may tighten but do not embellish.

### 5.1 Hero
- **Eyebrow / kicker** (small, uppercase, letter-spaced): `For iOS`
- **Headline** (display size): `One tap. Every day. That's it.`
- **Subhead** (1 paragraph, max ~24 words): `StreakTap is a habit tracker with one job: help you show up every day, without distractions.`
- **Primary CTA**: an **App Store badge** (use Apple's official "Download on the App Store" SVG). Link: `https://apps.apple.com/app/streaktap` *(placeholder — leave as-is, user will update)*.
- **Secondary CTA**: a quiet text link `See how it works ↓` that scrolls to the "How it works" section.
- **Hero visual**: a single iPhone mockup on the right (or below on mobile) showing the StreakTap home screen with a few habits. Use the placeholder image path `/images/hero-phone.png`. Add a note in a README that the user must drop their own screenshot here.

### 5.2 How it works (three steps)
Section heading: `Three steps. No setup.`

1. **Add a habit.** Name it. Pick a color if you want. Done.
2. **Tap once a day.** When you do the thing, tap the card. That's the whole interaction.
3. **Watch the streak grow.** Days become weeks. Weeks become months. No charts, no badges, no nudging.

Layout: three columns on desktop, stacked on mobile. Each step gets a numeral (`01`, `02`, `03`) as a quiet visual anchor — not a circle, not a badge, just a large light-weight number.

### 5.3 Features (the "what's in the box" grid)
Section heading: `What it does. And what it doesn't.`

Render as a two-column grid: a "Does" column and a "Doesn't" column. This contrast is the product's positioning — lean into it.

**Does**
- Tracks daily habits with a single tap
- Shows current and best streaks
- Works offline; your data stays on your device
- Supports daily, weekly, and "X times per week" habits
- Lets you skip a day without breaking the streak (when you mean to)
- Reorders with a long-press and drag

**Doesn't**
- Send you push notifications you don't want
- Sell or share your data
- Ask you to sign up for an account
- Show ads
- Add streak-shaming or guilt mechanics
- Try to be a social network

### 5.4 Philosophy
Section heading: `Built on four principles.`

Render as four short statements with generous spacing. Each is a single line.

> **Simplicity over features.**
> **Speed over flexibility.**
> **Clarity over customization.**
> **Function over decoration.**

Below the four lines, one closing paragraph:

> StreakTap exists because most habit trackers try to do too much. We picked the smallest possible thing that works — a daily tap — and refused to add anything that gets in its way.

### 5.5 FAQ
Section heading: `Questions, briefly answered.`

Use an accordion or a quiet definition-list layout. Keep answers short.

- **Is it free?** Yes. *(Update once pricing is decided.)*
- **Does it work on Android?** Not yet. iOS only.
- **Where is my data stored?** On your device. There is no account and no cloud sync.
- **Can I export my data?** Yes, from the settings screen.
- **What if I miss a day?** You can mark it as a planned skip — that protects your streak. If you just miss it, the streak resets. We don't punish you about it.
- **Do you send notifications?** Only if you ask for them. Off by default.

### 5.6 Final CTA strip
Just before the footer.

- Headline: `Start a streak today.`
- App Store badge, centered.

### 5.7 Footer
- Left: `StreakTap` wordmark and a one-line copyright (`© ${year} StreakTap`).
- Right: three quiet text links — `Privacy`, `Terms`, `Contact` (email).
- No social icons. No newsletter form.

---

## 6. Component-level changes

### Remove or hide
- Avatar component in the header (the template shows the author's face).
- "Latest from the blog" home-page section.
- Project cards.
- Newsletter / mailing list.
- RSS feed link.
- Author bio anywhere it appears.

### Add
- `AppStoreBadge` component: SVG button that links to the App Store. Renders the official Apple-provided badge. Accept `theme` prop (`'light' | 'dark'`).
- `PhoneFrame` component: a thin device-shaped frame to wrap a screenshot. Pure CSS — no images, no library. Roughly 380×800px aspect, ~40px corner radius, 1px hairline border.
- `FeaturesGrid` component for §5.3 (two-column does/doesn't).
- `Steps` component for §5.2.

### Repurpose
- The existing `Heading`, `Text`, `Flex`, `Column`, etc. Once UI primitives — keep using them. Don't introduce a second component library.

---

## 7. Metadata, SEO, social

Update wherever the template defines site metadata (look in `src/resources/config.js`, `src/app/layout.tsx`, or similar).

- **Site title**: `StreakTap — One tap. Every day.`
- **Description**: `A minimalist iOS habit tracker. Tap once a day to build and keep your streak. No accounts, no ads, no noise.`
- **Open Graph image**: `/og.png` (1200×630). Generate a simple OG: pure white background, large dark `StreakTap` wordmark centered, tagline below in smaller weight. No phone, no ornament.
- **Favicon**: replace template favicon. If no custom asset is provided, generate a simple monogram (`S` or `ST`) on a white background.
- **Theme color** (`<meta name="theme-color">`): `#FAFAFA` for light, `#0A0A0A` for dark.
- Remove any `manifest.json` PWA install prompts — this is a marketing page, not a PWA.

---

## 8. Things to delete from the template repo

Be thorough. A leftover blog post from the original author is a real risk.

- `src/app/blog/**`, `src/app/work/**`, `src/app/about/**`, `src/app/gallery/**`
- All MDX content files under `src/app/blog/posts/`, `src/app/work/projects/`
- All images that are personal photos of the original author
- `public/images/avatar*`, `public/images/projects/**`, `public/images/gallery/**`
- Any author name, email, social handle hardcoded in `src/resources/**`
- Sitemap entries for removed routes
- RSS feed routes/handlers if present

After removal, run `grep -ri "magic-portfolio\|once-ui-system\|<original-author-name>"` and audit hits.

---

## 9. Assets the human needs to provide later

Leave clear `TODO` markers (in code comments and in a `README-LANDING.md` at the repo root) for:

- `/public/images/hero-phone.png` — main hero screenshot
- `/public/og.png` — Open Graph image
- `/public/favicon.ico` and `/public/favicon.svg`
- App Store URL (search for `apps.apple.com/app/streaktap` and replace)
- Support email (search for `hello@streaktap.app` placeholder)

Use these placeholders consistently so a single find-and-replace updates everything.

---

## 10. Don'ts

- **Don't add testimonials, press logos, or "as seen in" rows.** There aren't any, and faking them breaks trust.
- **Don't add a pricing table** unless explicitly asked. The app's pricing model isn't fixed.
- **Don't add animations beyond a single subtle fade-in on scroll.** The template may ship with heavy effects — turn them down.
- **Don't add a cookie banner** unless analytics are added. No analytics by default.
- **Don't add a "Made with Once UI" or "Deployed on Vercel" badge** in the footer.
- **Don't introduce Tailwind, shadcn, or another design system** alongside Once UI. Pick one (the template's) and stay there.

---

## 11. Deliverable checklist

When you're done, the repo should:

- [ ] Build with `pnpm build` (or whatever the template uses) without errors
- [ ] Show a single-page landing experience at `/` with all sections from §5
- [ ] Have working `/privacy` and `/terms` stub pages (placeholder copy is fine)
- [ ] Have **no** references to the original portfolio author, blog, or projects
- [ ] Pass a Lighthouse run with reasonable scores (perf > 90, a11y > 95)
- [ ] Have a `README-LANDING.md` at the repo root listing the assets and URLs the human still needs to provide

Open a single commit (or PR) titled `Landing page: StreakTap`. In the description, list anything you skipped or made up so the human can review.
