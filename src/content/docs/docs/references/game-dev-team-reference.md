---
title: Game Dev Team Reference
---
A collection of useful links and resources for development.

---

## Core Documentation

| Resource | Link | Description |
|---|---|---|
| **libnds Docs** | [libnds.devkitpro.org](https://libnds.devkitpro.org/index.html) | The main DS library we build on. Reference for all hardware APIs - backgrounds, sprites, input, sound, etc. |
| **GBATEK Docs** | [problemkaputt.de/gbatek.htm](https://problemkaputt.de/gbatek.htm) | Low-level DS hardware reference. Covers registers, memory maps, and hardware behavior in detail. Essential for understanding what libnds is doing under the hood. |
| **NDS Examples** | [github.com/devkitPro/nds-examples](https://github.com/devkitPro/nds-examples) | Official devkitPro example projects covering graphics, audio, input, and more. Good starting point for unfamiliar systems. |
| **DS Dev Guide** | [patater.com/manual-git](https://www.patater.com/manual-git/cover.html) | Beginner-friendly intro to DS programming. Covers 2D graphics, sprites, and backgrounds with clear explanations. |

---

## Graphics

| Resource | Link | Description |
|---|---|---|
| **VRAM Calculator** | [mtheall.com/vram.html](https://mtheall.com/vram.html) | Visual tool for planning VRAM bank allocation. Use this when loading images to figure out which banks to assign to backgrounds vs. sprites. |
| **Grit Documentation** | [coranac.com - grit readme](https://www.coranac.com/files/grit-readme.txt) | Docs for grit, the tool used to convert images into DS-compatible formats (tilesets, tilemaps, palettes). |
| **BlocksDS 2D Graphics Intro** | [blocksds.skylyrac.net](https://blocksds.skylyrac.net/tutorial/basic/introduction_2d/) | Clear overview of how the DS 2D graphics system works - palettes, tiling, backgrounds, and sprites explained concisely. |

---

## Audio

| Resource | Link | Description |
|---|---|---|
| **Maxmod Conversion Guide** | [maxmod.org - conversion guide](https://maxmod.org/ref/tut/convguide.html) | Guide to converting audio files for use with Maxmod, the music and sound effect library used in P3D. |
| **Maxmod Reference** | [maxmod.org](https://maxmod.org) | Full Maxmod API reference for playback, sound banks, and streaming. |

---

## Math & Utilities

| Resource | Link | Description |
|---|---|---|
| **P3D Math Reference** | [Google Sheets](https://docs.google.com/spreadsheets/d/1f4Bhkg0gBqUSm4YR1Bba1JsQn6w6fPDrqBTaWlHla8A/edit?usp=drivesdk) | Spreadsheet covering math used in the project. |
| **Fixed-Point Math (GBATEK)** | [problemkaputt.de/gbatek.htm#dsmath](https://problemkaputt.de/gbatek.htm#dsmath) | The DS has no floating-point unit - all math uses fixed-point integers. This section covers the hardware math accelerator registers. |

---

*Missing a link? Drop it in the #game-dev-lounge channel on Discord and we'll add it here.*
