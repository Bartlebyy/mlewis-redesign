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
- [ ] **Real photos**: `gallery.html` currently links to the *old* site's hosted thumbnails
      (`https://www.mlewis.com/img/gallery/...`) so the page renders immediately. Replace these
      with local files in `/img/gallery/` (full-res + thumbnail per photo) for permanence and
      faster loading — the old host won't be reliable to depend on long-term.
- [ ] **Hero/OG image**: same story — swap the `og:image` in `index.html` for a locally-hosted photo.
- [ ] **Audio files**: `listen.html` has 14 working `<audio>` players wired to `/audio/*.mp3` — just
      drop the matching mp3 files into an `/audio/` folder at the site root with the exact
      filenames already in the HTML (e.g. `/audio/get-down-tonight.mp3`) and they'll play with no
      code changes.
- [ ] Swap placeholder favicon (`data:,`) for a real `favicon.ico` / `favicon.png`.
- [ ] Confirm the Spotify album ID (`5GoNMqthV9X8LCv7Taf8uw`) is still correct at launch time.

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
