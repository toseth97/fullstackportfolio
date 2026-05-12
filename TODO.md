# TODO - Futuristic Cybersecurity Portfolio Redesign

## Step 1 — Data + routes model
- [ ] Replace `lib/utils.js` portfolio dataset with cybersecurity narrative objects (labs/projects/infra/certs) including keywords SQLi, XSS, BitLocker.

## Step 2 — Add new App Router pages (rename routes)
- [ ] Create `app/labs/page.js` and `app/labs/[id]/page.js`.
- [ ] Create `app/experience/page.js`.
- [ ] Create `app/certifications/page.js`.
- [ ] Keep existing `/portfolio` routes working (either redirect or alias to `/labs`) to avoid broken links.

## Step 3 — Update navigation
- [ ] Update `components/Navigation.jsx` links to include Labs/Experience/Certifications.

## Step 4 — Redesign UI components
- [ ] Rewrite `components/Hero.jsx` for futuristic “security-first” identity and Europe-ready positioning.
- [ ] Rewrite `components/Footer.jsx` for cohesive theme.

## Step 5 — Futuristic theme styling
- [ ] Overhaul `app/globals.css` (HUD, scanlines, terminal cards, neon borders, reduced motion support).

## Step 6 — Labs components
- [ ] Create components to render labs/projects grid and detail pages consistently.

## Step 7 — Validation & build
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Smoke test: `/`, `/labs`, `/labs/[id]`, `/experience`, `/certifications`.

