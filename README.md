# CalicoMusic redesign — deploy &amp; finish checklist

## Deploy to Netlify (static site, no build step)
1. Create a free GitHub repo and push this whole folder to it (or drag-and-drop the folder
   directly into the Netlify dashboard at app.netlify.com — no Git required for a first pass).
2. In Netlify: **Add new site → Import from Git** (or **Deploy manually** for drag-and-drop).
3. Build settings: leave the build command blank, publish directory = `.` (already set in
   `netlify.toml`).
4. Once deployed, go to **Domain settings** and point `mlewis.com` / `www.mlewis.com` at the
   Netlify site (Netlify DNS or your existing registrar's CNAME/A record instructions).
5. **Forms:** the Contact page already has `data-netlify="true"` wired up — Netlify auto-detects
   it on deploy and submissions will appear under **Site → Forms** in the dashboard, with optional
   email notifications you can turn on in Form settings. No backend code needed.

## Before launch — content still needed from Mike

### Photos
- [ ] **Gallery photos**: `gallery.html` still links to the *old* site's hosted images
      (`https://www.mlewis.com/img/gallery/...`) so the page renders in the meantime. Replace
      with local files in `/img/gallery/` (full-res + thumbnail per photo) — the old host isn't
      reliable to depend on long-term.
- [ ] **Homepage portrait**: `index.html` has an empty photo-frame placeholder in the hero
      ("Photo of Mike Lewis — drop into /img/mike-lewis-portrait.jpg"). Drop the file in at that
      path and it displays automatically — no other changes needed.
- [ ] **About page portrait**: same placeholder pattern in the biography section of `about.html`
      — drop in `/img/mike-lewis-bio.jpg`.
- [ ] **Hero/OG image**: `og:image` in `index.html` currently points at the *old* site's hosted
      `conductor_1.png` — swap for a locally-hosted photo once the real gallery images are in.
- [ ] Swap placeholder favicon (`data:,`) for a real `favicon.ico` / `favicon.png`.

### Audio & album
- [x] ~~Audio files~~ — done. All 14 tracks are live in `/audio/`.
- [ ] Confirm the Spotify album ID (`5GoNMqthV9X8LCv7Taf8uw`, used on the homepage teaser, About
      page schema, and the `listen.html` embed) is still correct at launch time.

### Gallery captions — fact-check placeholder copy
The 7 photo captions on `gallery.html` were originally placeholder narrative text. Two are now
sourced from Mike's own book transcript (see below) and can be considered resolved unless Mike
corrects them:
- [x] ~~**Gold record photo**~~ — resolved from the book transcript: it's from the Celia Lipton
      Farris recordings, arranged/produced at Criteria Studios, early 1980s.
- [x] ~~**Barry Gibb photo**~~ — resolved from the book transcript: Miami Beach, 1975–76, during
      Bee Gees string-arrangement sessions at Criteria.
- [ ] The remaining 5 captions (sax/touring, sunglasses portrait, two conducting shots, writing
      desk) are still placeholder narrative guesses — the book transcript didn't identify these
      specific photos. Confirm they're accurate, or replace with the real story behind each.

### Biography timeline — 1970–2026 gap
**Resolved** — the "Digging into 1970–2026" section on `about.html` previously held 13 invented
placeholder entries. These have been replaced with ~20 real, dated entries sourced directly from
Mike's own published autobiography (`mike-lewis-book-transcript.md`, supplied 2026-08-04),
covering *Fountainhead* (1970) through the MLewisPops.com launch (2017) and into the 2026 album.
Entries were filtered to musical credits only (no personal/family/health details, per the site's
purpose as a professional booking tool) and kept strictly factual, matching the rest of the
site's tone.
- [ ] Mike should still review the new detail-timeline entries for accuracy — they're sourced
      from his book, but transcription or memory could contain small errors worth double-checking
      before this is considered final launch copy.
- [ ] A few names from the client-list credit walls couldn't be dated from the transcript excerpt
      provided (e.g. Julio Iglesias, the Glenn Miller Orchestra, the Ray Charles Orchestra dates)
      — these remain undated on the site but don't have placeholder scaffolding calling attention
      to that; flag if Mike wants them added to the detail timeline too.

### Reference: Mike's book transcript
A transcript excerpt from Mike's autobiography (chapters covering the 1970s–2010s) was supplied
and used as the primary source for the timeline/caption work above. If further detail passes are
wanted later — e.g. dating the individual tracks on the Listen page, or covering additional named
clients/stories from the book not yet reflected on the site — that transcript is the source to
pull from again.

## What changed from the old site (summary)
- Real visual identity (brass/ink/manuscript-paper palette, Fraunces + Inter + IBM Plex Mono type
  system) instead of an unstyled default template.
- Client list regrouped by category (recording artists / orchestras / cruise lines / publishing)
  and treated as a "credits marquee" instead of one long undifferentiated bullet dump.
- Real chronological timeline for the biography.
- Press quotes pulled out as a proper blockquote treatment instead of buried mid-paragraph.
- Functional audio players (the old site's players showed `00:00/00:00` and dead `#` links).
- Photo captions + working lightbox on the Gallery page.
- Unique `<title>` and meta description per page (the old site repeated the same description
  site-wide).
- `schema.org` JSON-LD (Person / ProfilePage / MusicPlaylist) on every page for richer search
  results.
- `sitemap.xml`, `robots.txt`, and `llms.txt` added for search engine and AI-crawler discovery.
- 301 redirects from the old extensionless URLs (`/about`, `/listen`, etc.) so old links and
  search rankings carry over.
- Fully responsive with a real mobile nav, visible keyboard focus states, and
  `prefers-reduced-motion` respected.
