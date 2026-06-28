---
title: Graphics Standards
---

Standardization and reference guide for project assets, UI, and visual identity

## Typography & Fonts

Standardized fonts for UI, logos, and in-game dialogue.  
[https://www.gamefontlibrary.com/games/persona-3-reload](https://www.gamefontlibrary.com/games/persona-3-reload)

| Font Name | Download/Link | Description & Usage |
| :---- | :---- | :---- |
| BM Space | [BM Space](https://drive.google.com/drive/folders/1luABQEy2UiN4_KnSpaD8RIxIrxNmbIGb?usp=drive_link) | Logo |
| Rodin Pro | [Rodin Pro](https://drive.google.com/drive/folders/1EPSfWA3SoNhlXu3rAn7ZQ22m7bgcWBb0?usp=drive_link) | Heading |
| New Rodin Pro | [New Rodin Pro](https://drive.google.com/drive/folders/15ndBAaIxY9FL48UjakaMGQCgqNRXwrFW?usp=drive_link) | Command |
| Skip STD B | [Skip STD B](https://drive.google.com/drive/folders/1xIzJIwHBud0Exl0F924-LJha0hwP_dem?usp=drive_link) | Body text & menu |

### Text Sizing Standards

* **Large text size (0x0 px):** Used for major headers, title screens, and prominent UI indicators.  
* **Medium text size (0x0 px):** Used for sub-headers, menu options, and character names in dialogue.  
* **Small text size (0x0 px):** Used for item descriptions, tooltips, and secondary UI elements.  
* **Console print text:** Used to display system information, lots of information to players in-game. Size is fixed and cannot be changed.

## Color Palette

### Base & MC Colors

| Colour | Hex | Description |
| :---- | :---- | :---- |
| ![][image2] | \#00ca69 | Dual green |
| ![][image3] | \#002c48 | Navy blue. Used as a background colour |
| ![][image4] | \#000024 | Darkest blue. Used instead of black, pairs well with Navy blue |
| ![][image5] | \#79ceff | Blue highlight. Used to indicate selected/active items |
| ![][image6] | \#282828 | Dark grey. Used instead of black |
| ![][image7] | \#0068d0 | Darker blue |
| ![][image8] | \#0989fd | Rich blue |
| ![][image9] | \#f112ef | Transparency colour. Used for assets when exporting as indexed and displaying in “standard” (NOT extended) palette mode. Check with devs if you need to add this |

### FEMC Colors

| Colour | Hex | Description |
| :---- | :---- | :---- |
| ![][image10] | \#ffc2e2 |  |
| ![][image11] | \#65000c |  |
| ![][image12] | \#480014 |  |
| ![][image13] | \#ff8dd6 |  |
| ![][image14] | \#ff719d |  |
| ![][image15] | \#e20059 |  |
| ![][image16] | \#da0055 |  |

### System & Status Colors

| Colour | Hex | Description |
| :---- | :---- | :---- |
|  |  |  |

## UI Components & Assets

Guidelines for building interfaces to ensure consistency across screens.

### Dialogue Boxes

* **Opacity:** Standard dialogue box background opacity should be ???  
* **Border:** ???px solid border using the respective highlight color (Blue for MC, Pink for FEMC).

### Character Portraits (Busts)

* **Dimensions:** Standardize dimensions for all character busts (treated as a background image, 256x192 base canvas).  
* **Positioning:** Eyes should generally align on the same horizontal axis across different characters to prevent UI jumping.  
* **File Naming Convention:** Use the following structure for asset files:

\[CharacterName\]\_\[Outfit\]\_\[Expression\].png  
Example: Makoto\_SchoolUniform\_Smile.png  
Example: Kotone\_Battle\_Angry.png

## Formatting, Resolution, etc.

See [https://persona-3-dual.vercel.app/docs?doc=md%2FART\_REFERENCE.md](https://persona-3-dual.vercel.app/docs?doc=md%2FART_REFERENCE.md) 