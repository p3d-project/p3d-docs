---
title: Welcome to the Docs
---
# Collision

Collision is driven by a 2D tile map overlaid on the 3D world. Each area/scene has a `.jmap` file in `assets/maps/` that defines the tile grid (see [JMAPS.md](JMAPS.md) for the format.)

---

## How It Works

The world is divided into a grid of *equally-sized* tiles. `CharacterController` tracks the character's world-space position and converts it to tile coordinates:

```
tileX = (worldX + worldOffsetX) / tileSize
tileZ = (worldZ + worldOffsetZ) / tileSize
```

Before each movement, the controller checks whether the destination tile is walkable. It tries three combinations to allow wall-sliding:

1. Full movement (X + Z)
2. X only (slide along a Z wall)
3. Z only (slide along an X wall)

The character has a bounding box (`characterSize`). All four corners are checked, not just the center, so the character can't clip through narrow walls.

---

## Tile Types

Defined in `source/controllers/CharacterController.h`:

| Value | Enum | jmap key | Description |
|-------|------|----------|-------------|
| 0 | `NO_COLLISION` | `w` | Walkable area |
| 1 | `COLLISION` | `c` | Solid wall, blocks movement |
| 2 | `SAVE` | `s` | Save interaction zone |
| 3 | `PREV_SCENE` | `p` | Transition to previous scene |
| 4 | `NEXT_SCENE` | `e` | Transition to next scene |
| 100 | `CHARACTER_Akihiko` | `c_a` | NPC trigger zone |

Tiles outside the map bounds default to `NO_COLLISION`.

---

## World Offset & Tile Size

`worldOffsetX` and `worldOffsetZ` shift the tile grid to align with the 3D geometry. `tileSize` sets how many world units one tile covers. These are defined per-view and must match the scale of the environment model. Use the world offset calculator tool in `/tools` if you need to recalculate them.

---

## Checking Tile Type in a View

```cpp
TileType tile = playerCtrl->isTileAt();

if (tile == TileType::NEXT_SCENE) {
    // transition to next area
} else if (tile == TileType::CHARACTER_Akihiko) {
    // show NPC prompt
}
```

`isTileAt()` returns the tile type at the character's current center position. This is called every frame in the view's `Update()`.
