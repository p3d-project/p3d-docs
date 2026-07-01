---
title: Installing the Game
---

Currently, we only support:

- **[melonDS](https://melonds.kuribo64.net/downloads.php)** (Windows/Linux/MacOS only)
- **Real DS / DSi / 3DS hardware** via [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/)

> Other versions of melonDS may work, but are untested
> Other flashcard launchers may work, but are untested

### melonDS (Emulator)
1. Download `persona-3-dual.nds` and `sdcard.img.zip` from the latest release, & decompress `sdcard.img.zip`
2. In melonDS, go to **Settings → DLDI** and enable DLDI.
3. Set the SD card image path to the generated `sdcard.img`.
> **Do NOT enable "Sync SD card to folder"**. This will wipe the contents of the folder!

Now, you can open melonDS and load the `persona-3-dual.nds` ROM!

<img width="316" height="300" alt="melonDS" src="https://github.com/user-attachments/assets/d34997e6-d13f-4428-a2b6-41b5272405d7" />

### Real Hardware (DS / DSi / 3DS)
Ensure you have the **latest version** of [TWiLight Menu++](https://wiki.ds-homebrew.com/twilightmenu/) with DLDI patching enabled.
> Oldest confirmed working version is v2.15.0

1. Download `persona-3-dual.nds` and `data.zip` from the latest release, & decompress `data.zip`
2. On your SD card, navigate to your `/roms/nds/` folder (or equivalent).
3. Copy `persona-3-dual.nds` and the entire `/data` folder into that directory:
   ```
   /roms/nds/
   ├── persona-3-dual.nds
   └── data/
       ├── music/
       ├── video/
       └── ...
   ```
4. In TWiLight Menu++ settings, ensure 
- **DLDI access** is set to **ARM9** 
- **Game Loader** is set to **nds-bootstrap**
> If you don't see these options, navigate between different settings pages using L/R.
> These should already be the default options anways.
4. Launch the game through TWiLight Menu++ as normal.

<img src="/docs/imgs/install-game/dldi.jpg" alt="DLDI" width="400"/>
<img src="/docs/imgs/install-game/bootstrap.jpg" alt="Bootstrap" width="400"/>

## FAQs
### Do you support melonDS on Android?
Unfortunately, we haven't tested this ourselves, so we cannot provide support.

### I've launched the game on my game console & have gotten a save error!
We've noticed that Windows will sometimes decompress the data.zip folder into *another* data folder. 
   ```
   data/
    └── data/
        ├── music
        ├── environments
        ├── ...
   ```

This is incorrect! Make sure you only have **one data folder** 
   ```
   data/
    ├── music
    ├── environments
    ├── ...
   ```

Also, make sure you are running the latest version of TWiLight Menu++ & have set the correct settings