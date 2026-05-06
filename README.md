# Recreational Activities Portfolio

A Next.js website portfolio for PEPC 19.03-PFT-N, featuring Duo Agawang Base and Dice Dash Basketball Relay mechanics, media, timeline, reflections, and a final farewell section.

## Setup

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the site:

```text
http://localhost:3000
```

## Adding Photos And Videos

Put shared media files here:

```text
public/photos
public/videos
```

Files inside `public` can be used directly in the site:

```text
/photos/example.jpg
/videos/example.mp4
```

For example, if you add:

```text
public/videos/duo-agawang-base.mp4
```

you can reference it in the code as:

```text
/videos/duo-agawang-base.mp4
```

## Editing Content

Most portfolio content is in:

```text
src/app/page.tsx
```

Useful places to edit:

- `heroClips` for the moving media wall
- `galleryMedia` for the Photos section
- `gameMedia` for the sticky media panels
- `filipinoMechanics` for Duo Agawang Base cards
- `foreignMechanics` for Dice Dash Basketball Relay cards
- `filipinoDetailedRules` and `foreignDetailedRules` for the modal rule lists
- `timeline` for the game day schedule
- `reflections` for the individual reflection sections

Styles are in:

```text
src/app/globals.css
```

## Checking Before Submission

Run lint:

```bash
npm run lint
```

Run production build:

```bash
npm run build
```

If both pass, the site is in good shape for deployment or submission.
