---
title: Audio
---
> #### **NOTE**: This document will be deprecated in the near future. Some items may be outdated/incorrect

Audio is handled by `MusicController` (`source/controllers/MusicController.h`), a wrapper around [**Maxmod**](https://maxmod.org/) for SFX and a custom **PCM streaming** system for background music.

---

## Music

#### Format
Maxmod supports MOD, S3M, XM, and IT, but the team is only using PCM formats at the moment.

All music is stored as raw PCM in `data/music/`. Source files are `.mp3` in `assets/music/` and are converted automatically by the Makefile via FFmpeg:

```
ffmpeg -i input.mp3 -f s16le -ar 32000 -ac 2 output.pcm
```

- **Sample rate:** 32,000 Hz
- **Channels:** Stereo (2)
- **Bit depth:** 16-bit signed

### Playing Music

```cpp
musicCtrl.init(filePath, loopStartSeconds, loopEndSeconds);
```

| Parameter | Description |
|-----------|-------------|
| `filePath` | Path to `.pcm` in FAT, e.g. `"fatBasePath + "music/tightrope.pcm"` |
| `loopStartSeconds` | Time in seconds to loop back to when the loop end is reached |
| `loopEndSeconds` | Time in seconds to trigger the loop. Use `-1.0f` to play through without looping |

`musicCtrl.update()` must be called every frame (including inside fade loops) to keep the audio stream alive.

### Adding New Music

1. Drop the `.mp3` into `assets/music/`
2. Run `make`, it converts automatically to `data/music/<name>.pcm`
3. Reference it in code as `"fatBasePath + "music/<name>.pcm"`

To find loop points, open the file in Audacity and locate the loop region visually. For extended/full-play tracks, use `0.0f` as loop start and the full duration as loop end (get duration via `ffprobe -v quiet -show_entries format=duration -of csv=p=0 input.mp3`).

---

## SFX

SFX uses Maxmod directly. Effects are defined in `assets/sfx/` and compiled into `soundbank.bin`.

```cpp
musicCtrl.loadSFX(SFX_SELECT);                        // load effect
mm_sfxhand h = musicCtrl.playSFX(SFX_SELECT, 255, 128); // play (volume, panning)
musicCtrl.stopSFX(h);                                 // stop
```

---

#### Intro Screen (`IntroView`)
Tightrope plays on the title/intro screen with

| Track | File | Chance | Loop Start | Loop End |
|-------|------|--------|------------|----------|
| Tightrope | `tightrope.pcm` | 50% | 17.962s | 66.082s |

#### Intro Video (`IntroVideoView`)
By default, the reload intro video plays, but you can change the intro via MainMenuView Settings

| Video | File |
|-------|------|
| Persona 3 Base intro | `base.vid` |
| Persona 3 FES intro | `fes.vid` |
| Persona 3 Portable intro | `portable.vid` |
| Persona 3 Reload intro | `reload.vid` |

Video audio is embedded in the `.vid` file and handled separately via `musicCtrl.initVideoAudio()`.

#### Iwatodai Dorm (`IwatodaiDormView`)
Plays the standard dorm theme.

| Track | File | Loop Start | Loop End |
|-------|------|------------|----------|
| Iwatodai Dorm | `iwatodai_dorm.pcm` | 0.0s | 920.973s (full play) |

## Random Music Selection

The random seed is set once at boot in `main.cpp` using the DS hardware timer:

```cpp
TIMER0_CR = TIMER_ENABLE | TIMER_DIV_1;
srand(TIMER0_DATA);
```

This gives a different seed each run since `TIMER0_DATA` counts CPU cycles from power-on.

### Adding a Random Selection

```cpp
// equal chance between N tracks
const std::string tracks[] = {
        fatBasePath + "music/a.pcm",
        fatBasePath + "music/b.pcm"
};
musicCtrl.init(tracks[rand() % 2].c_str(), loopStart, loopEnd);

// weighted (e.g. 1/3 chance of easter egg)
if (rand() % 3 == 0) {
    musicCtrl.init((fatBasePath + "music/easter_egg.pcm").c_str(), 0.0f, duration);
} else {
    musicCtrl.init((fatBasePath + "music/normal.pcm").c_str(), 0.0f, duration);
}

// per-track loop points
const std::string tracks[] = {
        fatBasePath + "music/a.pcm",
        fatBasePath + "music/a.pcm"
};
const float loopStarts[] = {17.962f, 0.0f};
const float loopEnds[]   = {66.082f, 295.706f};
int pick = rand() % 2;
musicCtrl.init(tracks[pick].c_str(), loopStarts[pick], loopEnds[pick]);
```
