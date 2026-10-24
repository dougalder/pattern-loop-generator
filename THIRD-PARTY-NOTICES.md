# Third-party notices

Pattern Loop Generator is released under the MIT licence (see `LICENSE`).
It is built from the web platform directly and includes **no third-party
JavaScript libraries**: the GIF and PNG-animation readers, the TIFF reader, the
MP4 packager and the GIF writer are all written for this project.

The items below are used by the app or by the project's tooling. Each keeps its
own licence, which is listed here so that the terms are easy to find.

## Web fonts (loaded at run time from Google Fonts)

The app's interface and the text sprites use these typefaces. They are **not**
copied into this repository. The browser fetches them from Google Fonts when
the app runs online, and falls back to fonts already on the device otherwise.

| Typeface | Used for | Licence | Where to read it |
|---|---|---|---|
| Archivo | Interface text | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Archivo |
| IBM Plex Mono | Labels and numbers | SIL Open Font License 1.1 | https://fonts.google.com/specimen/IBM+Plex+Mono |
| Bebas Neue | Text sprite option | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Bebas+Neue |
| Playfair Display | Text sprite option | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Playfair+Display |
| Abril Fatface | Text sprite option | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Abril+Fatface |
| Bungee | Text sprite option | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Bungee |
| Caveat | Text sprite option | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Caveat |

The SIL Open Font License permits free use, including commercial use, and
redistribution, provided the licence notice travels with any copy of the font
software. The full licence text is at https://openfontlicense.org. Each font's
copyright line is shown on its Google Fonts page.

## Developer tools (used only by `tools/`, never by the app)

| Package | Purpose | Licence |
|---|---|---|
| puppeteer-core | Drives a browser to take the screenshots | Apache License 2.0 |
| @sparticuz/chromium | Supplies a headless Chromium build for the screenshots | MIT (the bundled Chromium is licensed by its authors under the BSD-style and other open-source licences that come with it) |

These packages are not included in the app. They are only needed if you want to
regenerate the screenshots in `docs/screenshots/`.

## Standards and formats the app reads or writes

The app writes MP4 (MPEG-4 Part 14) containers with H.264 video, and GIF89a
files. It reads PNG, APNG, GIF, WebP, AVIF, JPEG, SVG and TIFF images as your
browser supports them. These are open, publicly documented formats. Using them
does not carry a licence fee for this app. Some H.264 encoders may carry patent
licensing questions for commercial products; that is a matter for whoever
distributes such a product, not for this free app.
