---
title: Mapping/Collision
---
Each area is authored as a `.jmap` file in `assets/maps/`. The build system converts it to a `.h` header via `build_asset.py` on `make`.

---

## Format

### Header

```
# Example collision map  WIDTHxHEIGHT
```

- The `WIDTHxHEIGHT` comment is parsed to set map dimensions

### Tile Key Reference

Tile keys and their mappings are defined in [`tools/tile_map.json`](../tools/tile_map.json). A summary is shown below though still check `tile_map.json`

```
# Tile key:
#   c     = collision        (COLLISION)
#   w     = no_collision     (NO_COLLISION)
#   e     = next_scene       (NEXT_SCENE)
#   p     = prev_scene       (PREV_SCENE)
#   s     = save             (SAVE)
#   c_a   = character_akihiko (CHARACTER_Akihiko)
```

### Tile Grid

The rest of the file is a comma-separated grid of tile keys, one row per line, left-to-right top-to-bottom. Must be exactly WIDTH × HEIGHT tiles.

```
c, c, c, c, c, c, c, c
c, w, w, w, w, w, w, c
c, w, s, w, w, w, w, c
c, w, w, w, w, w, w, c
c, w, w, w, w, w, e, c
c, c, c, c, c, c, c, c
```

---

## What Gets Generated

Running `make` produces `source/maps/<name>.h` containing:

- `#define <NAME>_MAP_WIDTH` and `<NAME>_MAP_HEIGHT`
- `static const uint8_t <name>_map[HEIGHT][WIDTH]` — the tile grid as integers

Example:
```cpp
#define IWATODAI_DORM_MAP_WIDTH  56
#define IWATODAI_DORM_MAP_HEIGHT 42
static const uint8_t iwatodai_dorm_map[42][56] = { ... };
```

These are included in the corresponding view's `.cpp` and passed to `CharacterController`.

---

## Creating a New jmap

1. Create `assets/maps/my_area.jmap` following the format above
2. Run "`make`" -> `source/maps/my_area.h` is generated automatically
3. Include it in your view: `#include "maps/my_area.h"`
4. Pass the map to `CharacterController`:

```cpp
playerCtrl = new CharacterController(
    MY_AREA_MAP_WIDTH, MY_AREA_MAP_HEIGHT,
    &my_area_map[0][0],
    tileSize, worldOffsetX, worldOffsetZ,
    characterSize, speed, angleIncrement,
    distance, lookAhead, angle,
    characterTranslate, characterFacingAngle
);
```

See [SCENES.md](SCENES.md) for how to wire up transitions between areas.
