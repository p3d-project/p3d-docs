---
title: Graphics Team Reference
---
This document covers the technical constraints and workflows the P3D art team needs to be aware of when creating assets. Understanding the DS hardware limitations is essential. Assets that don't conform to these specs won't display correctly in-game.

---

## DS Graphics Overview

**References:** [video.h](https://libnds.devkitpro.org/video_8h.html#a1e46218ee302fcc8c77e4ea0968ea149) · [background.h](https://libnds.devkitpro.org/background_8h.html) · [sprite.h](https://libnds.devkitpro.org/sprite_8h.html#a1b3e231e628b18808e49a2f94c96b1ea)

Each DS screen is **256×192 pixels**. The DS has two screens with independent graphics engines (main and sub), each supporting their own backgrounds and sprites.

There are two categories of graphics on the DS: **backgrounds** and **sprites**.

---

## Backgrounds

Each graphics engine supports up to **4 simultaneous backgrounds**, and each can cover the full 256×192 screen. P3D only supports **1 background** per screen due to how the current UIScreen system works. Any other elements are recommended to be sprites.

Backgrounds are tile-based - they're composed of 8×8 pixel tiles assembled into a map. Keep this in mind when designing background art; elements should align to an 8×8 grid when practical.

---

## Sprites

Sprites are the main building block for UI elements, characters, and interactive objects in P3D.

Each graphics engine supports up to **128 sprites on screen at once**.

### Valid Sprite Sizes

Sprites must use one of the following hardware-defined sizes. You cannot use arbitrary dimensions.

| Shape | Sizes |
|---|---|
| **Square** | 8×8, 16×16, 32×32, 64×64 |
| **Wide** (landscape) | 16×8, 32×8, 32×16, 64×32 |
| **Tall** (portrait) | 8×16, 8×32, 16×32, 32×64 |

> **64×64 is the maximum size for a single sprite.** For anything larger, we stitch multiple sprites together in code to create composite images. This is standard practice for larger UI panels.

All sprite dimensions must be **multiples of 8 pixels** - this is a hardware requirement, not a preference.

---

## Indexed Images & Transparency

Many DS assets need to be saved as **indexed (paletted) images** rather than full-colour images. Here's why and when:

### What is indexing?

An indexed image doesn't store full colour data per pixel. Instead, it stores a **palette** (a list of up to 256 colours), and each pixel holds an index number pointing to a colour in that palette. This saves significant memory on hardware with limited VRAM.

### When does an asset need to be indexed?

- **Always** for tiled graphics (sprites and tiled backgrounds) - the DS hardware requires it.
- Bitmap backgrounds *can* use direct colour, but this is memory-intensive and generally avoided.

### The transparency colour (Index 0)

In indexed mode, **palette index 0 is reserved for transparency**. Whatever colour sits in slot 0 of the palette will be treated as fully transparent by the hardware.

This is why many of our source assets have a **pink/magenta background** - it's a convention to use a colour that's visually obvious and unlikely to appear in the actual artwork. When the asset is converted, that colour is placed in palette slot 0 and becomes transparent in-game.

> **When exporting assets:** Make sure your transparency colour is in palette slot 0. In GIMP, you can control this directly in the indexed palette editor. In Aseprite/Libresprite, set your transparent colour index to 0.


### Standard palette mode vs. Extended palettes

| Mode | Bit Depth | Sprites | Backgrounds |
|---|---|---|---|
| **Standard** | 4-bit | 16 palettes × 16 colours (16x16 grid) | 16 palettes × 16 colours (or 1 shared 256-colour palette) |
| **Extended** | 8-bit | Up to 16 palettes × 256 colours each | Up to 16 palettes × 256 colours each per layer |

**Standard palette mode** is the default (4-bit colour depth). While there are 256 colours available in memory, they are organized into a **16x16 grid** (16 palettes of 16 colours each). This is limiting if assets have very different colour schemes, as each individual sprite is restricted to referencing just one of those 16-colour palettes at a time.

**Extended palette mode** (8-bit colour depth) gives each sprite its own full palette slot (up to 16 palettes of 256 colours), which is much more flexible.

P3D uses standards palettes (16x16) for sprites & backgrounds. This means:
- Background & sprites have max 16 colours each
    - Remember, transparency takes up 1 colour slot
    - Gradients are really tough because of only 16 max colours
- Each sprite/background can have its own unique 16-colour palette. It doesn't need to be universal
- But, we can only have 16 unique palettes showing at once
    - 16 colours x 16 palettes
- Try to make sprites share palettes as much as possible

When in doubt about which mode an asset is using, check with the Game Dev team.

---

## DS Colour

The DS uses a **15-bit colour format (BGR555)** - 5 bits per channel (red, green, blue), giving **32,768 possible colours**. This is less than the standard 24-bit "true colour" used in most modern software.

### What this means for you

Any colours you pick in GIMP, or Aseprite/Libresprite will be **rounded down to the nearest DS-supported colour** during conversion. You won't see this in your source files, but you will see it in-game or in the emulator.

Each channel (R, G, B) can only have **32 distinct values** (0–31) rather than 256. Colours that are close together in your source file may appear identical on hardware.

### Tips

- Work in full 24-bit colour as normal in your source files - the conversion tools handle downsampling automatically.
- Avoid subtle gradients with many similar colours; they may collapse into flat bands on hardware.
- When previewing how an asset will look on DS, save it as a 16-bit BMP and reload it, or test directly in the emulator.

### DS Colour Palette

![DS supported colour palette](/docs/imgs/art-reference/ds-colour-palette.png)

---

## File Export Guidelines

| Asset type | Format | Notes |
|---|---|---|
| Sprites | Indexed PNG | Palette slot 0 = transparency colour |
| Tiled backgrounds | Indexed PNG | Align content to 8×8 grid |
| Bitmap backgrounds | PNG (direct colour) | Memory-heavy; avoid if possible |
| Editable source files | .psd, etc. | Upload to Google Drive alongside exports |

- Always upload both the **exported asset** and the **editable source file** to Google Drive.
- Link the Drive folder in the relevant GitHub issue when closing it.
- Attach a viewable preview image directly to the issue as well.

---

*Questions about technical specs or asset pipelines? Ask on Discord*
