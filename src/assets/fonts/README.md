# Custom fonts

Place your `.ttf` or `.otf` font files here. The names in `src/theme/fontFamily.js` (e.g. `SFPRODISPLAY_REGULAR`) must match the font’s **PostScript name** (you can check this in Font Book on macOS or similar tools).

After adding fonts, run:

```bash
npm run link-fonts
```

Then rebuild the app (`npm run ios` or `npm run android`).
