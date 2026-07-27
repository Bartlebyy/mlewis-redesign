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
The 7 photo captions on `gallery.html` are placeholder narrative text (marked as such on the
page itself) guessing at what each photo shows, written to match the existing bio. **All 7 need
Mike's review** — especially:
- [ ] **Gold record photo**: caption currently says "from one of the productions along the way" —
      needs the actual artist/album and rough year.
- [ ] **Barry Gibb photo**: caption doesn't include a date — when was this taken / what project?
- [ ] Confirm the other 5 captions (sax/touring, sunglasses portrait, two conducting shots, writing
      desk) are accurate, or replace with the real story behind each.

### Biography timeline — 1970–2026 gap
The bio timeline (`about.html`) is detailed and dated from 1938–1970, then has almost nothing
placed in time for the following 56 years. Six placeholder decade-entries (1970s–2010s) were
added marking exactly what's missing, each with an embedded question:
- [ ] **1970s**: which recording-artist credits (Bobby Caldwell, Dr. Hook, KC and the Sunshine
      Band, etc.) belong in this decade?
- [ ] **1980s**: when did cruise-line work start (Royal Caribbean / Celebrity / Norwegian / Costa
      / Royal Olympic / Crystal), and which line came first? Also: what's the gold record for
      (see Gallery, above)?
- [ ] **1990s**: the least-documented decade on the whole timeline — where do Rod Stewart, the Bee
      Gees / Barry Gibb, Willie Nelson, John Mellencamp, or Julio Iglesias fit, or later?
- [ ] **2000s**: where do the Ray Charles Orchestra, Boca & Palm Beach Pops, Glenn Miller
      Orchestra, and South Florida Jazz Orchestra credits fit chronologically?
- [ ] **2010s**: roughly when did the shift into sequenced/Digital Performer composition begin
      (the original MIDI tracks on the Listen page)? This is a real career pivot and deserves a
      real date once known.
- [ ] Once real dates/credits come in, remove the bracketed `[Mike: ...]` questions and the
      "(placeholder decade)" labels from each `<span class="tl-date">` in `about.html`.

### Other copy to verify
- [ ] Gallery intro text includes a visible parenthetical noting the captions are placeholders —
      remove that line once real captions are in.

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
