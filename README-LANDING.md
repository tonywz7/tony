# StreakTap Landing Page

This is the marketing landing page for **StreakTap**, an iOS habit-tracking app.
Built on [Once UI / magic-portfolio](https://github.com/once-ui-system/magic-portfolio) (Next.js 15).

---

## Assets you still need to provide

Search for these placeholders in the codebase and replace them:

| Placeholder | File to drop in | Description |
|---|---|---|
| `/public/images/hero-phone.png` | `public/images/hero-phone.png` | Main hero screenshot of the StreakTap home screen. Recommended: 304×640px or any 9:19 portrait crop. |
| `/public/og.png` | `public/og.png` | Open Graph image, 1200×630px. Pure white background, large dark "StreakTap" wordmark, tagline below. |
| `/public/favicon.ico` | `public/favicon.ico` | Replace the current template favicon. |
| `/public/favicon.svg` | `public/favicon.svg` | SVG favicon (monogram `S` or `ST` on white). |

### URLs to update

Search for `apps.apple.com/app/streaktap` to update the App Store link once your app is live.

Search for `hello@streaktap.app` to update the support/contact email address.

Search for `https://streaktap.app` (in `src/resources/once-ui.config.ts`) to set your actual domain for SEO/sitemap.

---

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

---

## What was removed from the template

- `/about`, `/work`, `/blog`, `/gallery` routes and all MDX content
- Newsletter / Mailchimp component
- Author avatar and personal photos
- Project cards
- Gallery images
- RSS feed route (`/api/rss`)
- OG image generation API (`/api/og`) — replaced with a static `/og.png`
- Social links (GitHub, LinkedIn, Twitter, Threads, Instagram)
- "Made with Once UI" footer credit
- Decorative background dots / mask cursor effects

## What was added

- `Hero` — eyebrow + display headline + subhead + App Store badge + phone frame
- `Steps` — "Three steps. No setup." (3-column on desktop)
- `FeaturesGrid` — "Does / Doesn't" two-column grid
- `Philosophy` — four principles + closing paragraph
- `FAQ` — accordion-based questions
- `FinalCTA` — pre-footer CTA strip
- `AppStoreBadge` — pure-SVG App Store badge, `light`/`dark` prop
- `PhoneFrame` — CSS-only device frame
- `/privacy` and `/terms` stub pages
- Monochrome theme: brand and accent mapped to neutral gray via CSS variable overrides

---

## Things you may want to do before launch

- [ ] Drop in `hero-phone.png`, `og.png`, `favicon.ico`, `favicon.svg`
- [ ] Update App Store URL once app is approved
- [ ] Update `baseURL` in `src/resources/once-ui.config.ts` to your real domain
- [ ] Replace placeholder copy in `/privacy` and `/terms`
- [ ] Decide on pricing and update the FAQ answer for "Is it free?"
- [ ] Run `pnpm build` and check Lighthouse scores (target: perf > 90, a11y > 95)
