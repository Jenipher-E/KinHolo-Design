# KinHolo v2 design

Design files for the KinHolo mobile app, version 2 (Design C, "Daylight title card"). This repository is the visual source of truth for the build.

## What's here

```
KinHolo v2 design/
├── index.html            All 22 screens on one canvas. Open in a browser.
├── style-guide.html      Visual style guide: colour, type, logo and core components.
├── STYLE-GUIDE.md        Full written rules. Read this before building.
├── tokens/
│   ├── tokens.json       Design tokens for the app theme (colour, type, radius, space).
│   └── tokens.css        The same tokens as CSS custom properties.
└── src/
    ├── kinholo.css       Screen styles used by the canvas.
    ├── common.js         Icons, OK mark, status bar, tab bar, avatars, keypad, renderer.
    ├── layouts-daylight.js   Sign-up step layouts (create account, code, household).
    ├── layouts-titlecard.js  Title band layouts reused by Design C.
    ├── screens-c.js      Design C: the screen list, its changes and the menu, calendar and activity screens.
    └── image-slot.js     Drop-in photo placeholder used for the welcome and household photos.
```

## Viewing

Open `index.html` directly, or serve the folder:

```
npx serve .
```

Fonts load from Google Fonts (Newsreader and Hanken Grotesk), so an internet connection is needed for the right type.

## Building from this

- Use `tokens/tokens.json` to generate the app theme. Names map one to one onto `STYLE-GUIDE.md`.
- The HTML in `src/` is a design mock, not production code. Rebuild the screens as native components in the app.
- The OK mark geometry matches `apps/mobile/src/components/LogoMark.tsx` in the app code.
- Tabs stay as the live app has them: Home, Tasks, People, Lists, Settings. Budgets and expenses is reached from Home and the menu.

## Photography

The household photo in these screens is a placeholder: Photo by Derek Owens on Unsplash (https://unsplash.com/@derekowensheart). Replace it with licensed or commissioned photography before launch.

## Copy rules

No em dashes, sentence case, no exclamation marks. See section 10 of `STYLE-GUIDE.md`.
