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
6. **Canonicals checked** — every page's `<link rel="canonical">` is self-referential and matches
   its own filename (e.g. `about.html` canonicals to `.../about.html`), and `netlify.toml` already
   301-redirects the old extensionless URLs (`/about`, `/listen`, etc.) to the `.html` form so
   existing search rankings and backlinks carry over.

## Keeping "60 years" and similar figures from going stale
- [x] ~~On-page "X years" text~~ — automated. The homepage lede's "For over 60 years" and
      About's "compresses 56 years" / "Digging into 1970–2026" eyebrow now use
      `<span class="years-since" data-since="1970">`/`<span class="current-year">`, computed by a
      small script in `js/main.js` on every page load — no manual edits needed going forward.
      The static number in the HTML is just a same-day-accurate fallback for no-JS clients/crawlers.
- [ ] **Meta descriptions, og:description, and JSON-LD still say "60-year(s)" as plain static
      text** — these are read by search engines and social-media link previews, which don't run
      JavaScript, so they can't use the same fix. They'll drift by a year or two before becoming
      noticeably stale; touch up manually every few years (search for "60-year" / "60 years" across
      `index.html` and `about.html`).

## Before launch — content still needed from Mike

### Photos — the biggest remaining gap
- [ ] **Gallery photos**: `gallery.html` still links to the *old* site's hosted images
      (`https://www.mlewis.com/img/gallery/...`) so the page renders in the meantime. Replace
      with local files in `/img/gallery/` (full-res + thumbnail per photo) — the old host isn't
      reliable to depend on long-term. Once real files are in place, rename them to descriptive
      filenames (`mike-lewis-conducting-1978.jpg` instead of `conductor_1.png`) and convert to
      WebP for page weight — currently blocked since the files aren't in this repo.
- [ ] **Homepage portrait**: `index.html` has an empty photo-frame placeholder in the hero
      ("Photo of Mike Lewis — drop into /img/mike-lewis-portrait.jpg"). Drop the file in at that
      path and it displays automatically — no other changes needed.
- [ ] **About page portrait**: the bio-intro photo slot was removed (the only available candidate,
      a 5-piece band photo where Mike is a small figure, was too weak as a lone bio anchor). About
      now links out to the Gallery instead. Revisit if a stronger solo/near-solo photo turns up.
- [x] ~~Homepage hero photo~~ — done. Real portrait in place at `/img/mike-lewis-portrait.jpg`
      (hero photo-frame changed to a 1:1 ratio to fit it without cropping).
- [x] ~~Hero/OG image~~ — `og:image` now points at the real portrait. Currently set to the
      Netlify preview URL (`https://mlewis-redesign.netlify.app/img/mike-lewis-portrait.jpg`) so
      link previews (Slack, etc.) show the right photo now — **switch to
      `https://www.mlewis.com/img/mike-lewis-portrait.jpg` once the real domain is live.**
- [x] ~~Favicon~~ — done. Real favicon (Icons8 music-note glyph, 16/32/96px PNGs) is live on all
      five pages.

### Audio & album
- [x] ~~Audio files~~ — done. All 14 tracks are live in `/audio/`.
- [ ] Confirm the Spotify album ID (`5GoNMqthV9X8LCv7Taf8uw`, used on the homepage teaser, About
      page schema, and the `listen.html` embed) is still correct at launch time.

### Gallery captions — fact-check placeholder copy
The 7 photo captions on `gallery.html` were originally placeholder narrative text. Two are
resolved from Mike's book transcript:
- [x] ~~**Gold record photo**~~ — resolved: a full-orchestra recording arranged/produced at
      Criteria Studios, early 1980s.
- [x] ~~**Barry Gibb photo**~~ — resolved: Miami Beach, 1975–76, during Bee Gees
      string-arrangement sessions at Criteria.
- [ ] The remaining 5 captions (sax/touring, sunglasses portrait, two conducting shots, writing
      desk) are still placeholder narrative guesses — confirm they're accurate, or replace with
      the real story behind each.

### Biography timeline — fact-check
- [ ] Mike should review the ~20-entry detail timeline on `about.html` (sourced from his book
      transcript) and the newer certification/chart entries added below for accuracy —
      transcription or memory could contain small errors worth double-checking before launch.
- [ ] A few names in the client-list pills still have no date (Julio Iglesias, Glenn Miller
      Orchestra, Ray Charles Orchestra) — flag if Mike wants them added to the timeline too.

### Verified certifications & credits — added, more may exist
An AFM Local 655 profile (Sept. 2006, pulled from the Wayback Machine) and independent
Wikipedia/RIAA checks turned up real, sourced chart/certification detail, now on the About
timeline: Betty Wright's "Clean Up Woman" (RIAA Gold, #6 Hot 100), KC and the Sunshine Band
("Get Down Tonight" and "That's the Way (I Like It)" are RIAA Diamond singles), Dr. Hook's
*Pleasure and Pain* (RIAA Gold, 1979), Crosby Stills & Nash's *CSN* (RIAA 4× Platinum, 3 tracks),
Bobby Caldwell's "What You Won't Do for Love" (#9 Hot 100), and Anita Ward's *Songs of Love*
(includes "Ring My Bell," #1 Hot 100/UK/R&B/Disco — album-level arranger credit, not confirmed
per-track). A real testimonial from Whit Sidener (Director of Studio Music & Jazz, University of
Miami Frost School of Music) replaced the old Lisanne-Lyons-album-review quotes, which praised
her singing rather than Mike's work.

Still unverified / not on the site — do not add without confirming first:
- [ ] Black Sabbath *Technical Ecstasy* string-arrangement credit (AllMusic-sourced; AllMusic's
      Mike Lewis entry currently conflates at least 3–4 different people, so treat anything from
      there as unreliable until cross-checked against the actual LP credits).
- [ ] Any ASCAP/BMI citations or awards — ask Mike directly, likely not indexed anywhere public.
- [ ] Which physical gold/platinum records he has at home (he's confirmed he has several) — the
      cleanest next step is photographing each plaque for the Gallery with a real caption.
- [ ] The AFM profile mentions two more sourced, checkable credits not yet added to the site:
      Cornelius Brothers & Sister Rose's "Too Late to Turn Back Now" (#2 Hot 100, gold, Mike
      arranged strings and played piano), and Trick Daddy's "Take It to da House" (2001, #2
      Billboard, built around a sample of Mike's "Boogie Shoes" horn arrangement for KC). Both
      spot-checked and confirmed independently — ready to add to the timeline whenever.
- [ ] The AFM profile also includes direct quotes from Mike himself about his arranging
      philosophy and the TK Records years — good source material for future About-page copy.

### External profile links (sameAs / GEO)
- [x] ~~Discogs~~ — added to About's Person schema (`sameAs`), based on user-provided research
      that this assistant could not independently verify (Discogs blocks automated fetches).
- [x] ~~Kendor~~ — added. Independently fetched and confirmed: bio matches exactly (University of
      Miami 1965, Charlie Spivak/Jimmy Dorsey Orchestra tours, same client list including CSN,
      KC and the Sunshine Band, Dr. Hook, Rod Stewart, Julio Iglesias, Mellencamp, Bobby Caldwell,
      Maureen McGovern).
- [x] ~~HeBu~~ — added. Independently fetched; page is thin (no names/dates) but consistent with
      the site's bio, and the user confirmed it directly.
- [ ] RateYourMusic, AllMusic (after its entity-merge problem is fixed or split), IMDb, and the
      OA2 release page were suggested in research but not added — none independently verified.
      Confirm each before adding.
- [ ] Consider a Wikidata entry and/or MusicBrainz entry — low effort, would help disambiguate
      "Mike Lewis" (an extremely common name in music) for search engines and LLMs.

### Reference: Mike's book transcript & AFM profile
- `mike-lewis-book-transcript.md` (supplied 2026-08-04) — primary source for the original
  1970–2026 detail timeline and two Gallery captions.
- AFM Local 655 profile of Mike, Sept. 2006, via Wayback Machine (URL: web.archive.org/web/
  20200801160845/http://www.afm655.org/item/2006/09/profile-mike-lewis) — source for the Whit
  Sidener testimonial and the still-unadded Cornelius Bros./Trick Daddy credits and quotes above.
  Reportedly includes a photo of Mike — worth checking as a possible source for the still-empty
  portrait placeholders.

## Bigger items raised but deliberately not started
These need real facts, new long-form content, or business decisions from Mike — noted here so
they aren't lost, not attempted without that input:
- [ ] Service pages for the six specialties (4–6 pages, ~600–900 words each, with process detail,
      audio, and a CTA) — currently just two-line cards on the homepage.
- [ ] Pricing/process/FAQ content — "how much does a custom arrangement cost," deliverable
      formats (score/parts, Finale/Sibelius/Dorico, transposed parts, PDF), revision policy,
      whether Mike conducts the session.
- [ ] Published sheet-music catalog page (Kendor, Alfred, Warner Bros., Kalmus, JW Pepper) with
      buy links — a real revenue stream and audience (band directors) currently mentioned only as
      four publisher names in the client list.
- [ ] Google Business Profile as a service-area business, for local search.
- [ ] A direct email fallback on Contact was tried and removed (see git history) — the button
      styling broke in production. Revisit with a properly-styled version if wanted; note the old
      live site has no visible email either, so this isn't restoring something that was lost.

## What changed from the old site (summary)
- Real visual identity (brass/ink/manuscript-paper palette, Fraunces + Inter + IBM Plex Mono type
  system) instead of an unstyled default template.
- Client list regrouped by category (recording artists / orchestras / cruise lines / publishing)
  and treated as a "credits marquee" instead of one long undifferentiated bullet dump.
- Real chronological timeline for the biography, enriched with verified chart/certification data.
- A real testimonial from a named industry source (Whit Sidener, UM Frost School of Music)
  replacing quotes that praised someone else's singing.
- Functional audio players (the old site's players showed `00:00/00:00` and dead `#` links).
- Photo captions + working lightbox on the Gallery page.
- Unique `<title>` and meta description per page (the old site repeated the same description
  site-wide), now naming Miami for local search.
- `schema.org` JSON-LD (Person / ProfilePage / MusicPlaylist) on every page, including a
  `homeLocation` (Miami) and a Discogs `sameAs` link.
- `sitemap.xml`, `robots.txt`, and `llms.txt` added for search engine and AI-crawler discovery.
- 301 redirects from the old extensionless URLs so old links and search rankings carry over.
- A real favicon (was a blank placeholder before).
- Sticky in-page section navigation on the About and Listen pages.
- A site-wide sticky footer so short pages don't leave a dead gap on tall windows.
- First-person voice throughout body copy (was inconsistently mixed first/third person).
- Fully responsive with a real mobile nav, visible keyboard focus states, and
  `prefers-reduced-motion` respected.
