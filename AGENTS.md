<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Recreational Activities Portfolio Handoff

## Project Goal

This is a Next.js website portfolio for PEPC 19.03-PFT-N, 2nd Semester / May 2026. It presents the modified mechanics, photos, media moments, and individual reflections for Edward Diesta and Rafael Rafanan.

The site is meant to feel like a polished, scroll-reactive portfolio rather than a plain document. The visual direction is dark, cinematic, and movement-heavy, with tone changes between sections.

## What Has Been Built

- A scroll-based one-page portfolio in `src/app/page.tsx`.
- A reactive page vibe system in `src/app/vibe-controller.tsx` that changes the document `data-vibe` based on the active section.
- Full-page styling in `src/app/globals.css`, including:
  - dark cinematic background treatment
  - reveal-on-scroll animations
  - game section layouts
  - sticky media panels
  - responsive gallery cards
  - reflection sections
  - final goodbye section
- Modal-based "More Details" buttons in `src/app/rules-modal.tsx`.
- Rule/mechanics content from the PDFs has been integrated into the game sections and modal rule lists.
- The final revisions section was removed.
- A "Goodbye, PE" closing section was added as a farewell to the last PE subject and a thank-you to Ma'am Allely.
- `README.md` was added/updated with setup instructions for a groupmate.
- Media folders were placed under `public/`:
  - `public/photos/`
  - `public/videos/`

## Current Content

- Student names:
  - Edward Diesta
  - Rafael Rafanan
- Date display:
  - 2nd Sem / May 2026
- Main games shown:
  - Duo Agawang Base
  - Dice Dash Basketball Relay
- Edward's reflection currently emphasizes:
  - RecAct as one of his best PE experiences
  - being a Computer Science student with screen-heavy, computer-like subjects
  - the class as a real rest time
  - enjoying classmates, movement, stress relief, and competitive spirit
  - ending PE with good memories
- Reflection callout/highlight quotes were removed.
- Edward's reflection no longer explicitly names the games.

## Media Status

- Uploaded photos were inspected and wired into the site.
- `public/lahi/` now contains Duo Agawang Base / Laro ng Lahi photos showing pair movement, base defense, tagging, jail/base moments, and team positioning.
- `public/photos/` mostly shows Dice Dash Basketball Relay: court, shooting, cone relay, scoreboard/bracket, and team moments.
- There are currently no real videos. `public/videos/.gitkeep` exists only so the folder is tracked.
- The Photos feature image currently uses:
  - `public/photos/1ccfe712-8f98-4bd0-8fcc-9b0e572a0dce.jpeg`

## Important Files

- `src/app/page.tsx`
  - Main content arrays and page structure.
  - Edit `heroClips`, `galleryMedia`, `gameMedia`, rule arrays, timeline items, and `reflections` here.
- `src/app/globals.css`
  - Main visual system and responsive layout.
- `src/app/rules-modal.tsx`
  - Client-side modal for full rule lists.
- `src/app/vibe-controller.tsx`
  - Client-side scroll observer that changes the global section vibe.
- `public/photos/`
  - Add replacement photos here.
- `public/lahi/`
  - Laro ng Lahi / Duo Agawang Base photos.
- `public/videos/`
  - Add actual videos here later.
- `README.md`
  - Setup guide for collaborators.

## Remaining Work

- Add real videos if available, especially for:
  - sticky looping panels in each game section
  - the Photos feature area
  - gallery/media moments
- Keep the restored reflection profile photos in `public/profiles/` unless better replacements are added.
- Confirm the final exact timing/date of the presentation or gameplay if needed.
- Do a final visual pass on mobile and desktop after all real media is added.
- Commit the latest changes when the content is final.

## Development Notes

- Before editing Next.js APIs or app structure, read the relevant docs in `node_modules/next/dist/docs/` because this project uses a newer Next.js version with possible breaking changes.
- Use `npm run lint` and `npm run build` before considering changes complete.
- Keep images and videos in `public/photos/` and `public/videos/` so they can be referenced as `/photos/name.jpeg` and `/videos/name.mp4`.
- Prefer updating the existing arrays in `src/app/page.tsx` over creating new content systems.
