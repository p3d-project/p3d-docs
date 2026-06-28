---
title: Environments
---
## Billboards
To create billboards, create a plane mesh with the **prefix "BB_"**. Ensure that the *top level grouping* of the mesh is named this (ex. BB_Tree, BB_Fence_1).

## Optimize Environment Models
To optimize environment models, install the nds_environment_optimizer.py Blender plugin in tools/plugins/blender.
You need to prepare your environment model before optimizing it:
1. In ```Object Mode``` everything (A), then go into ```Edit Mode``` and select everything again (A)
2. Click the "M" key, and select Merge -> By Distance

To use the optimizer:
1. Go back into ```Object Mode``` and click "N". On the sidebar, you should see a tab called ```NDS Engine```
2. Click that, and you should see a popup called ```NDS Environment Optimizer``` with a ```Optimize Environment``` button
3. Now, select the objects you want to optimize, and click ```Optimize Environment```. This may take a few minutes
4. Once its down optimizing, on the bottom left of the viewport, there will be a dropdown called ```Optimize Environment```. Click that to expand and modify optimization settings.

The most important options under ```Optimize Environment``` are
- Planar angle (0-45): Modifying this value changes how 'optimized' the models become
- Ignore polys below #: Ignores polygons below the selected number. Useful to avoid messing up flat objects, and smaller objects

![Optimization example](/docs/imgs/environments/optimization_example.png)

## Blender Export Settings
See the export settings below:
![Export settings](/docs/imgs/environments/Blender_Export.png)

After you export the file, open the .mtl file and ensure that the file path for the texture is just ```<texture>.png```, NOT ```/path/to/somewhere/<texture>.png```
