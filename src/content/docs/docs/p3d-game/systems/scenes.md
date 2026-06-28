---
title: Scenes
---
Scenes are individual game areas, each one is a class that inherits from `View` and lives in `source/views/`. The active scene is managed in `main.cpp` via `SwitchView()`, which handles cleanup of the old scene and init of the new one.

---

## ViewState

`ViewState` is an enum defined in `source/core/View.h`. Every `Update()` returns one to signal what should happen next:

```cpp
enum class ViewState {
    DISCLAIMER,
    INTRO_VIDEO,
    INTRO,
    MAIN_MENU,
    IWATODAI_DORM,
    IWATODAI_STREETS,
    KEEP_CURRENT   // stay in the current scene, no switch
};
```

Returning `KEEP_CURRENT` is the default — the scene just keeps running.

---

## Scene Lifecycle

Each scene implements three functions:

```cpp
void Init();          // called once on scene load — setup VRAM, music, controllers
ViewState Update();   // called every frame — input, logic, returns next state
void Cleanup();       // called once on scene unload — free VRAM, controllers
```

`SwitchView()` in `main.cpp` calls `Cleanup()` on the current scene, deletes it, then creates and `Init()`s the new one.

---

## How Transitions Work

Scene transitions are triggered by tile types in the collision map (see [COLLISION.md](COLLISION.md)). The view checks `isTileAt()` each frame and returns the appropriate `ViewState`:

```cpp
// in IwatodaiDormView::Update()
if (playerCtrl->isTileAt() == TileType::NEXT_SCENE) {
    musicCtrl.pause();
    return ViewState::IWATODAI_STREETS;
}
```

`main.cpp` receives this state and calls `SwitchView`:

```cpp
} else if (nextState == ViewState::IWATODAI_STREETS) {
    SwitchView(new IwatodaiStreetsView());
}
```

---

## Adding a New Scene

### 1. Add a ViewState

In `source/core/View.h`, add your state to the enum before `KEEP_CURRENT`:

```cpp
enum class ViewState {
    // ... existing states ...
    MY_AREA,
    KEEP_CURRENT
};
```

### 2. Create the View class

`source/views/MyAreaView.h`:

```cpp
#pragma once
#include "core/View.h"
#include "core/globals.h"
#include "controllers/CharacterController.h"

class MyAreaView : public View {
    public:
        void Init() override;
        ViewState Update() override;
        void Cleanup() override;
    private:
        CharacterController* playerCtrl = nullptr;
        // add any area-specific state here
};
```

`source/views/MyAreaView.cpp`:

```cpp
#include <nds.h>
#include "core/globals.h"
#include "MyAreaView.h"
#include "maps/my_area.h"

void MyAreaView::Init() {
    // setup 3D mode, VRAM banks
    videoSetMode(MODE_0_3D);

    // setup music
    musicCtrl.init(MY_AREA_MUSIC, 0.0f, <duration>);

    // setup collision/movement
    playerCtrl = new CharacterController(
        MY_AREA_MAP_WIDTH, MY_AREA_MAP_HEIGHT,
        &my_area_map[0][0],
        tileSize, worldOffsetX, worldOffsetZ,
        characterSize, speed, angleIncrement,
        distance, lookAhead, angle,
        characterTranslate, characterFacingAngle
    );
}

ViewState MyAreaView::Update() {
    // handle transitions
    if (playerCtrl->isTileAt() == TileType::PREV_SCENE) {
        musicCtrl.pause();
        return ViewState::IWATODAI_DORM; // or wherever
    }

    musicCtrl.update();
    return ViewState::KEEP_CURRENT;
}

void MyAreaView::Cleanup() {
    setBrightness(3, 0);

    // reset VRAM banks
    vramSetBankA(VRAM_A_LCD);
    vramSetBankB(VRAM_B_LCD);

    delete playerCtrl;
    playerCtrl = nullptr;
}
```

### 3. Register it in main.cpp

```cpp
#include "views/MyAreaView.h"

// in the main loop switch block:
} else if (nextState == ViewState::MY_AREA) {
    SwitchView(new MyAreaView());
}
```

### 4. Trigger the transition from an existing area

In the existing area's `.jmap`, place `e` tiles at the exit point. In that area's `Update()`:

```cpp
if (playerCtrl->isTileAt() == TileType::NEXT_SCENE) {
    musicCtrl.pause();
    return ViewState::MY_AREA;
}
```

In your new area's `.jmap`, place `p` tiles where the player arrives so they can walk back.

### 5. Create the jmap

See [JMAPS.md](JMAPS.md) for the full jmap format and how the build system generates the header.
