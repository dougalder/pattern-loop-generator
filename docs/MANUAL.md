# Pattern Loop Generator: user manual

Version 1.7

This manual explains everything in the app in plain language. You do not need
any design or programming experience.

![The app open in light mode with a leaf pattern in the preview](screenshots/01-main-light.png)

---

## Contents

1. [What the app does](#1-what-the-app-does)
2. [Starting the app](#2-starting-the-app)
3. [The layout](#3-the-layout)
4. [Light and dark appearance](#4-light-and-dark-appearance)
5. [The quick-action toolbar](#5-the-quick-action-toolbar)
6. [Sprites: choosing what repeats](#6-sprites-choosing-what-repeats)
7. [Templates: ready-made looks](#7-templates-ready-made-looks)
8. [Lattice: how the copies are arranged](#8-lattice-how-the-copies-are-arranged)
9. [Motion: how things move](#9-motion-how-things-move)
10. [Camera: moving the view](#10-camera-moving-the-view)
11. [Colour: paint and background](#11-colour-paint-and-background)
12. [Export: saving your work](#12-export-saving-your-work)
13. [Saved looks](#13-saved-looks)
14. [Keyboard shortcuts](#14-keyboard-shortcuts)
15. [Using the app on an iPhone, iPad or Mac](#15-using-the-app-on-an-iphone-ipad-or-mac)
16. [Privacy](#16-privacy)
17. [Troubleshooting](#17-troubleshooting)
18. [Words used in this manual](#18-words-used-in-this-manual)

---

## 1. What the app does

A **pattern** is a shape repeated many times across the screen, like floor
tiles. The Pattern Loop Generator lets you choose the shape, then makes the
shapes move in a way that repeats perfectly. When the animation reaches the end,
it joins back to the start with no jump, so it can play forever.

You can make:

- **A video (MP4 file).** This is a standard movie file that plays on phones,
  computers and most social media sites. MP4 stands for MPEG-4, the name of the
  compression standard used.
- **An animated picture (GIF file).** GIF stands for Graphics Interchange
  Format. It is a short, silent, looping picture, often used in messages and
  on websites.

Your shape can be a built-in one (a circle, a star, a snowflake and many more),
a word you type, or a picture you bring in from your own files. Pictures
should be **transparent**, meaning the background is see-through, so only the
shape itself shows. PNG (Portable Network Graphics) is the most common
transparent format.

---

## 2. Starting the app

The app is a single web page called **pattern-loop-generator.html**.

1. Find the file on your computer or open the project's web address.
2. Double-click it, or open it in your browser.
3. It will start by itself with a pattern already running.

No installation, account or internet connection is needed once the page has
loaded. Your browser can keep the page for offline use.

**Which browsers work?** Safari on a Mac or an iPhone or iPad, and recent
versions of Chrome, Edge and Firefox. On some browsers, video export runs in
real time, which means a 6-second video takes about 6 seconds to save. Newer
browsers encode it faster than that.

---

## 3. The layout

The screen has two halves.

- **The preview** (left, or top on a phone). This shows your pattern moving. It
  is shaped like the finished video, so you see exactly what will be saved.
  The small label in its bottom-left corner shows the loop length, the frame
  rate (how many pictures are shown each second) and the total number of
  pictures in one loop.
- **The controls** (right, or below on a phone). These are arranged in
  **tabs**: the row of labelled buttons across the top. Click a tab to open that
  set of controls. Only one tab is open at a time, so the screen stays tidy.

At the top left you will see the app name and a small **version number** such
as "v1.7". This tells you exactly which release you are using. It is helpful
when you report a problem.

### Hiding the controls

Next to the tabs is a small arrow button. Click it to fold the whole control
panel away, so the preview fills the window. Click it again to bring the
controls back.

---

## 4. Light and dark appearance

In the top bar you will see two small buttons: a **sun** (light) and a
**moon** (dark). Click either one to switch how the app's own interface looks.

Light and dark only change the surrounding screen. The preview always keeps a
neutral backdrop, so the colours you choose for your pattern are judged
fairly. The app remembers your choice the next time you open it.

---

## 5. The quick-action toolbar

The row of small buttons floating over the preview gives quick access to the
things you use most. From left to right:

| Button | What it does |
|---|---|
| **‹ Back** | Goes to the previous template (a ready-made look). |
| **› Next** | Goes to the next template. |
| **Magic wand** | Gives you a completely new random look. Press it again for another. |
| **Shuffle arrows** | Keeps the same shape and colours but re-rolls the random arrangement. |
| **Half-filled circle** | Picks a new set of colours that work well together. |
| **Four-way arrow** | Moves this toolbar to the other side of the preview: top, left or right. Your choice is remembered. |

Every button has a tooltip: rest your mouse pointer on it for a second and a
short description appears.

---

## 6. Sprites: choosing what repeats

A **sprite** is the single image that gets copied across the pattern. The
**Sprites** tab is where you choose it.

### 6.1 Text

Type a word or a short phrase into the **Text** box. The word becomes the
sprite. Use the drop-down list beside it to choose a font (the design of the
letters).

To clear the box, click the small **×** at its right-hand end.

### 6.2 Importing your own picture

Under **Import** is a small square with an upward arrow. Click it, then choose
a file from your device. The app accepts:

- **PNG**: the best choice for most pictures. Use one with a transparent
  background.
- **GIF**: can be still or animated. Animated ones will move in the pattern.
- **WebP**, **SVG** (Scalable Vector Graphics, a drawing format that stays sharp
  at any size) and animated **APNG** (Animated Portable Network Graphics).

You can also **paste** a picture. Copy an image from another app or a web page,
click on the preview area (not on a text box), then press:

- **Command and V** (⌘V) on a Mac, or
- **Control and V** (Ctrl V) on a Windows computer.

The new picture appears as a chip in the Import row.

**Trimming:** pictures often come with a wide empty margin of transparent space.
The app trims that excess away so your shape fills its space properly, and then
adds back a small margin of about 10 pixels all round, so the edges don't touch.

To remove an imported picture, click the small **×** in the corner of its chip.

### 6.3 Built-in shapes

Below the import row are the built-in shapes, grouped by theme:

- **Drawn**: these are not fixed shapes. Each copy in the pattern is drawn a
  little differently: lightning bolts that flash, branching nerve cells that
  grow and fire, and jellyfish that pulse as they swim.
- **Geometry**: circles, squares, bars, triangles and other basic forms.
- **Marks**: stars, sparks, arrows and similar symbols.
- **Sport**: football, basketball, tennis ball and similar.
- **Seasonal**: snowflakes, gifts, baubles, trees and bells.
- **Nature & play**: leaves, petals, hearts, flowers and the sun.

Click any shape to use it. The chosen one has a red outline.

The colour of built-in shapes follows the **Sprite** colour in the Colour tab.
Your own pictures keep their own colours.

### 6.4 Stamps

A **stamp** drops a small handful of copies of the same sprite together in one
spot, so you can create a cluster that swirls, rather than a whole field.

- Click **Use stamps** to turn stamps on.
- Click **Place a stamp** to add one. You can have up to six.
- Drag the preview to move the stamp you are editing.
- Use the sliders to change how many copies it has, how far they spread, how
  much they vary, how long they live, how fast the cluster turns and how much
  each copy spins.

**Hide the pattern** switches off the background copies so only your stamps
show.

---

## 7. Templates: ready-made looks

The **Templates** tab holds a large set of complete starting points. Each one
sets the shape, colours, motion and arrangement together. Their names include
Dropping, Floating, Vortex, Column, Storm, Neurons, Jellies, Snow day and many
more.

- **Click a template** to load it.
- **Click the same template again**, or the tile called **Yours**, to return to
  your own settings. The app saves your settings there whenever you load a
  template, so nothing is lost.
- The small **arrow badge** in a tile's corner shows the arrangement a template
  uses: **SPIRAL** or **TUBE**. Templates without a badge use a grid.
- The **download-style arrow** in a tile's corner saves that look to a file for
  later use (see section 13).

If you change any control after loading a template, the app returns you to
**Yours** automatically. A word you have typed or a picture you have imported is
kept when you change template, so the template takes on your sprite.

---

## 8. Lattice: how the copies are arranged

The **Lattice** tab controls where the copies sit.

### 8.1 Arrangement

- **Grid**: copies sit in neat rows and columns, like tiles.
- **Spiral**: copies wind outwards from the centre along curved arms, like a
  galaxy or a shell.
- **Tube**: copies wrap round the outside of an invisible cylinder, like a
  barrel or a pillar.

The sliders that appear below change with the arrangement you pick.

### 8.2 The main sliders

Each slider has a **number box** next to its name. You can drag the slider, or
click in the number box and type an exact value, for more precision.

- **Scale**: how big each copy is.
- **Spacing across** and **Spacing down**: how far apart the copies sit from
  side to side and from top to bottom.
- **Angle**: turns the whole pattern.
- **Shear X** and **Shear Y**: slants the grid, a bit like pushing a rectangle
  into a parallelogram.
- **3D tilt**: tips the pattern back as if it were lying on a table, giving a
  sense of depth. Its value runs from −62 to +62 degrees.

### 8.3 Each copy

- **Plain rotation**: turns every copy by the same amount.
- **Flip**: mirrors copies. *Alternate X* and *Alternate Y* mirror every second
  copy in a chequered way. *Random* mirrors copies unpredictably.
- **Scale jitter** and **Angle jitter**: make each copy slightly different in
  size and turn, so the pattern looks less mechanical.
- **Scatter**: pushes copies away from their exact grid positions, up to about
  half a space.

**Shuffle** (the crossed-arrows button in the toolbar) re-rolls the random values.
The randomness is always the same for a given setting, so you can come back to
a pattern you liked.

---

## 9. Motion: how things move

The **Motion** tab controls the animation.

### 9.1 The loop

- **Loop length**: how many seconds one full cycle takes, from 2 to 20. Everything
  returns to exactly where it started at the end of the loop, so the join is
  invisible.
- **Drift across** and **Drift down**: the direction and speed the whole pattern
  slides. Negative numbers slide the other way. Values are whole steps so the
  loop still closes.

### 9.2 Stepping

- **Steps per loop** and **Step snap** make the pattern jump forward in stages,
  like a ticking clock, instead of gliding smoothly. Step snap holds the pattern
  still between jumps and then moves it quickly. At 0 the movement is smooth.

### 9.3 Depth

- **Depth layers** splits copies into groups. Nearer groups are bigger and move
  faster; farther groups are smaller and look hazier.
- **Depth** sets how strong that effect is.

### 9.4 Spin, pulse and waves

- **Spin** turns each copy about its own centre. **Spin variety** lets copies
  turn by different whole numbers of turns, and **Spin stagger** starts each
  copy's turn at a different moment.
- **Pulse** makes copies grow and shrink in time. **Pulse cycles** sets how many
  pulses happen in one loop.
- **Wave spread** spreads the timing of the pulse across the pattern, so a
  ripple travels through it.
- **Tilt sweep** rocks the 3D tilt back and forth. **Sweep cycles** sets how many
  times it rocks in one loop.

### 9.5 Lifetime

- **Lifetime** makes copies appear, fade and disappear on their own schedules.
  **Life cycles** sets how often this repeats in one loop.

### 9.6 Exact loop

The **Exact loop** button is on by default. It makes sure any randomness repeats
perfectly. Leave it on unless you specifically want the pattern to jump at the
end of each loop.

A note below the sliders tells you whether the current loop closes exactly.

---

## 10. Camera: moving the view

The **Camera** tab lets the viewer's window move over the pattern, like a camera
panning and zooming across a large picture.

1. Click **Move the camera** to switch the camera on. It is off by default.
2. Click **Add a stop**. A stop is a saved view: a position, a zoom level and a
   roll (turning the view round, like tilting your head).
3. Move the view by dragging the preview, or by using the **Across**, **Down**,
   **Zoom** and **Roll** sliders. On a touch screen, use two fingers to pinch
   and zoom. On a computer, the scroll wheel or a trackpad pinch also zooms.
4. Add more stops as you wish. The camera travels from one stop to the next,
   then back to the first, so the move loops seamlessly.

The numbered chips show your stops. Click a chip to move to that stop and edit
it. Click the small **×** on a chip to delete it.

The transport buttons step between stops, and the **play** button lets the
camera run round the whole circuit.

- **Path between stops**: *Curved* swings smoothly through each stop. *Straight*
  travels in straight lines and slows to a stop at each point.
- **Ease**: how gently the camera slows as it arrives at each stop. At 0 it moves
  at an even speed.
- **Hold at each stop**: how long the camera pauses at each stop.

---

## 11. Colour: paint and background

The **Colour** tab controls how things look.

### 11.1 Choosing colours

Three swatches sit at the top:

- **Background**: the main colour behind the pattern.
- **Gradient**: a second colour that blends into the background. Click **Use
  gradient** to turn it on.
- **Sprite**: the colour of the built-in shapes. This swatch disappears if you
  have imported your own picture, because that picture keeps its own colours.

Click a swatch to select it, then:

- Click or drag on the **colour wheel** to pick a hue (a colour family) and
  how strong it is.
- Use the **Brightness** slider to make it lighter or darker.
- Type a **hex code** (a short code that names an exact colour, such as
  `#DB2F51`) into the box if you already know the colour you want.

**Try new colours** picks a fresh set that is designed to work together. The half-filled circle in the toolbar does the same thing.

**Gradient angle** sets which direction the blend runs.

### 11.2 Green screen

**Green screen** replaces the background with a solid chroma-key green. Chroma
key means a bright, uniform colour that video editing software can later
remove. Use it when you plan to put your pattern over another video. Avoid
green sprites when this is on, because they would disappear too.

### 11.3 Background image

Under **Background image** you can import a picture to sit behind the pattern,
using the same methods as for sprites (see 6.2). Supported formats include JPEG
(a common photo format), PNG, WebP, AVIF (a modern compressed image format),
SVG, TIFF (Tagged Image File Format, often used by design programs), and animated
GIF or APNG.

- **Fill** stretches the picture to cover the whole frame, cropping the edges if
  needed.
- **Fit** shows the whole picture with blank space at the sides if needed.

An animated background plays a whole number of times per loop, so its loop also
closes neatly.

Click the small **×** on a background chip to remove it.

---

## 12. Export: saving your work

The **Export** tab sets the size and format. The big **Export** button at the
bottom of the screen starts the saving.

### 12.1 Format

- **MP4**: a video file. Choose a **frame rate** of 24, 30 or 60 pictures per
  second. Higher numbers are smoother but make larger files. 30 is a good
  choice for most purposes.
- **GIF**: an animated picture. You can choose its longest edge in pixels (360
  to 1080). Smaller is quicker to save and to send. GIF uses only 256 colours,
  so the app spreads them carefully to keep gradients smooth. You can also
  choose **Repeat forever**. Without it, the animation plays once and stops.

### 12.2 Size

Choose a preset from the **Size** list:

| Preset | Pixels | Typical use |
|---|---|---|
| Story / Reels | 1080 × 1920 | Instagram and TikTok vertical video |
| Portrait post | 1080 × 1350 | Instagram portrait posts |
| Square | 1080 × 1080 | Square posts |
| HD landscape | 1920 × 1080 | Full-screen video, YouTube |
| HD 720 | 1280 × 720 | Smaller, faster files |
| QHD | 2560 × 1440 | Higher-resolution screens |
| 4K | 3840 × 2160 | Very high resolution, large files |

"Pixels" are the tiny dots that make up a picture. "HD" means high definition.
"4K" means about 4000 pixels across. Bigger sizes take longer to save.

### 12.3 Length

The **Length** slider sets how long the loop lasts, in seconds.

### 12.4 Saving

Click **Export**. A progress bar and a status message show what is happening.
When it finishes, the file is saved. The status line shows its name and size.

On an iPhone or iPad, the app opens the share sheet so you can choose
**Save Video** or send the file on.

### 12.5 File names

Files are named in this pattern:

**YYYY-MM-DD Pattern Loop Generator-[Shape]-[Width]x[Height].[type]**

For example: `2026-10-24 Pattern Loop Generator-Leaf-1920x1080.mp4`

- The date is when you saved the file.
- The shape name is what you repeated. For text, it is your word. For a picture
  you imported, it is the picture's own file name.
- The size is in pixels, and the last part is the file type.

If you save two files with the same name on the same day, your browser adds a
number to the second one so nothing is overwritten.

---

## 13. Saved looks

A **saved look** keeps everything about a pattern in one small file: every
setting, your sprite, your background and your camera stops. You can reopen it
later, on any device, and continue where you left off.

- **To save:** open the **Export** tab and click **Save this look**. Or click
  the small **download-style arrow** on the **Yours** tile in the Templates tab.
- **To open:** open the **Export** tab and click **Load a look**. Choose a file
  that ends in `.json`.

The file is plain text, so you can keep it, email it or store it in a folder.
JSON (JavaScript Object Notation) is a common format for storing settings.

---

## 14. Keyboard shortcuts

Hold **Shift** and press one of these letters while not typing in a box:

| Keys | What it does |
|---|---|
| **Shift T** | Next template |
| **Shift B** | Previous template |
| **Shift R** | A random look |

**Command V** (Mac) or **Control V** (Windows) pastes a picture as a sprite.

---

## 15. Using the app on an iPhone, iPad or Mac

- **Safari** is fully supported on the Mac, iPhone and iPad.
- On a **touch screen**, the sliders become bigger so they are easier to drag
  with a finger.
- On an **iPhone**, the controls sit beneath the preview. Scroll the lower panel
  to reach them.
- Saving a video on an iPhone or iPad opens the **share sheet**. Choose **Save
  Video** to put it in Photos, or **Save to Files**.
- To paste a picture on a Mac, click the preview area and press **Command V**.

---

## 16. Privacy

Everything happens inside your browser.

- Pictures you import are read from your device and are **never uploaded**.
- The video or animated picture is built on your own machine.
- There is no account, no tracking and no advertising.
- The only thing the app fetches from the internet is the typefaces used for the
  interface and text sprites. Without them it uses the fonts already on your
  device.

Closing the tab clears the work. Only your choice of light or dark appearance is
remembered, plus the toolbar's position.

---

## 17. Troubleshooting

**The preview is blank, or says it could not start.**
Click **Try again**, or reload the page. If it still fails, close other browser
tabs that use graphics heavily, then try again. Some browsers cap how many
graphics windows can be open at once.

**"Try WebGL again" appears under the Export button.**
WebGL (Web Graphics Library) is the technology that draws the pattern quickly
using your graphics chip. The app has switched to a slower drawing method. Click
the button to try the fast method again.

**My picture does not appear, or the preview shows nothing.**
Check that the file is one of the supported types. A picture that is entirely
transparent will not show anything. Some pictures saved as SVG depend on
outside fonts or images; saving them as PNG usually fixes this.

**The export failed.**
Read the message on the status line. Very large sizes with high frame rates can
be too much for some devices. Try a smaller size or a lower frame rate.

**The export is taking a long time.**
Large GIFs take a while because each frame has to be worked out. The progress
bar keeps moving. Please wait for it to finish.

**The file did not save on my phone.**
Make sure you pick **Save Video** or **Save to Files** from the share sheet.

**I want to start over.**
Click the **Random look** magic wand, or load any template, then adjust from
there. Or open a saved look you made earlier.

---

## 18. Words used in this manual

- **Animation**: a sequence of pictures shown quickly, so things appear to move.
- **Chroma key**: a plain, bright colour that video software can remove, so
  another picture can show through.
- **Codec**: a method for squeezing video or pictures into a smaller file.
  **H.264** is the codec used for MP4 files.
- **Frame**: one picture in an animation. A video is many frames shown in order.
- **Frame rate**: how many frames are shown each second, written as fps (frames
  per second).
- **GIF**: Graphics Interchange Format, a format for short looping pictures.
- **GPU**: graphics processing unit, the chip that draws pictures quickly.
- **Gradient**: colour that blends smoothly from one shade to another.
- **Hex code**: a six-character code, such as `#DB2F51`, that names an exact
  colour.
- **HTML**: HyperText Markup Language, the language web pages are written in.
- **JSON**: JavaScript Object Notation, a plain-text format for storing settings.
- **Loop**: a sequence that returns to its start, so it can repeat forever.
- **MP4**: MPEG-4 Part 14, a common video file format.
- **PNG**: Portable Network Graphics, a picture format that supports
  transparency.
- **Pixel**: one tiny dot in a picture.
- **Sprite**: the single picture or shape that is copied across the pattern.
- **SVG**: Scalable Vector Graphics, a drawing format that stays sharp at any
  size.
- **Template**: a complete, ready-made look you can load and adjust.
- **Transparent**: see-through in places. A transparent background lets only the
  shape show.
- **WebGL**: Web Graphics Library, which lets a web page use the graphics chip.
- **WebCodecs**: a set of browser features for turning frames into video quickly.

---

*Pattern Loop Generator 1.7. Released under the MIT licence; see `LICENSE`.
Font and tool licences are listed in `THIRD-PARTY-NOTICES.md`.*
