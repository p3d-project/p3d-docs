---
title: Art Team Reference
---
This document covers the technical constraints and workflows the P3D art team needs to be aware of when creating assets. Understanding the DS hardware limitations is essential. Assets that don't conform to these specs won't display correctly in-game.

---

## DS Graphics Overview

**References:** [video.h](https://libnds.devkitpro.org/video_8h.html#a1e46218ee302fcc8c77e4ea0968ea149) · [background.h](https://libnds.devkitpro.org/background_8h.html) · [sprite.h](https://libnds.devkitpro.org/sprite_8h.html#a1b3e231e628b18808e49a2f94c96b1ea)

Each DS screen is **256×192 pixels**. The DS has two screens with independent graphics engines (main and sub), each supporting their own backgrounds and sprites.

There are two categories of graphics on the DS: **backgrounds** and **sprites**.

---

## Backgrounds

Each graphics engine supports up to **4 simultaneous backgrounds**, and each can cover the full 256×192 screen. We try to use only **1 background** per screen where possible to keep things simple and save VRAM.

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

Many DS assets need to be saved as **indexed (paletted) images** rather than full-color images. Here's why and when:

### What is indexing?

An indexed image doesn't store full color data per pixel. Instead, it stores a **palette** (a list of up to 256 colors), and each pixel holds an index number pointing to a color in that palette. This saves significant memory on hardware with limited VRAM.

### When does an asset need to be indexed?

- **Always** for tiled graphics (sprites and tiled backgrounds) - the DS hardware requires it.
- Bitmap backgrounds *can* use direct color, but this is memory-intensive and generally avoided.

### The transparency color (Color 0)

In indexed mode, **palette index 0 is reserved for transparency**. Whatever color sits in slot 0 of the palette will be treated as fully transparent by the hardware.

This is why many of our source assets have a **pink/magenta background** - it's a convention to use a color that's visually obvious and unlikely to appear in the actual artwork. When the asset is converted, that color is placed in palette slot 0 and becomes transparent in-game.

> **When exporting assets:** Make sure your transparency color is in palette slot 0. In GIMP, you can control this directly in the indexed palette editor. In Aseprite/Libresprite, set your transparent color index to 0.

### Standard palette mode vs. Extended palettes

| Mode | Sprites | Backgrounds |
|---|---|---|
| **Standard** | 1 shared palette of up to 256 colors | 1 shared palette of up to 256 colors |
| **Extended** | Up to 16 palettes × 256 colors each | Up to 16 palettes × 256 colors each per layer |

**Standard palette mode** is the default. All sprites share one global palette of up to 256 colors (or 16 palettes of 16 colors each). This is limiting if assets have very different color schemes.

**Extended palette mode** gives each sprite its own palette slot (up to 16 palettes of 256 colors), which is much more flexible. P3D uses extended palettes for sprites. This means:

- Each individual sprite/asset can have up to **256 unique colors** drawn from the full DS color space.
- You still need to index your image - you're just no longer constrained to sharing a single global palette with all other sprites.
- You don't need to define a transparency colour

When in doubt about which mode an asset is using, check with the dev team.

---

## DS Color

The DS uses a **15-bit color format (BGR555)** - 5 bits per channel (red, green, blue), giving **32,768 possible colors**. This is less than the standard 24-bit "true color" used in most modern software.

### What this means for you

Any colors you pick in GIMP, or Aseprite/Libresprite will be **rounded down to the nearest DS-supported color** during conversion. You won't see this in your source files, but you will see it in-game or in the emulator.

Each channel (R, G, B) can only have **32 distinct values** (0–31) rather than 256. Colors that are close together in your source file may appear identical on hardware.

### Tips

- Work in full 24-bit color as normal in your source files - the conversion tools handle downsampling automatically.
- Avoid subtle gradients with many similar colors; they may collapse into flat bands on hardware.
- When previewing how an asset will look on DS, save it as a 16-bit BMP and reload it, or test directly in the emulator.

### DS Color Palette

![DS supported color palette](/docs/imgs/art-reference/ds-color-palette.png)

---

## File Export Guidelines

| Asset type | Format | Notes |
|---|---|---|
| Sprites | Indexed PNG | Palette slot 0 = transparency color |
| Tiled backgrounds | Indexed PNG | Align content to 8×8 grid |
| Bitmap backgrounds | PNG (direct color) | Memory-heavy; avoid if possible |
| Editable source files | `.xcf` (GIMP), `.aseprite` (Aseprite), `.ase` (Libresprite) | Upload to Google Drive alongside exports |
> NOTE: If the colour palette is in extended mode, the assets don't need an explicit transparency color. Check with the dev team to confirm if your assets need a transparency colour or not.

- Always upload both the **exported asset** and the **editable source file** to Google Drive.
- Link the Drive folder in the relevant GitHub issue when closing it.
- Attach a viewable preview image directly to the issue as well.

---

## Tools Quick Reference

| Tool | Purpose |
|---|---|
| [Libresprite](https://libresprite.github.io/#!/) | Pixel art & sprite animation |
| [Aseprite](https://www.aseprite.org) | Pixel art & sprite animation |
| [GIMP](https://www.gimp.org) | General image editing, palette management |
| [Blender](https://www.blender.org) | 3D modeling |
| [Noesis](https://richwhitehouse.com/index.php?content=inc_projects.php&showproject=91) | Ripping & converting game assets |

---

*Questions about technical specs or asset pipelines? Ask on Discord*
