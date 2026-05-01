---
kind: note
id: claude-conversation-2023-08-16-merging-fbx-animation-onto-glb-skeleton-ebb4e752
updatedAt: 1692225912325
createdAt: 1692225744841
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: ebb4e752-c96b-4f07-88a9-e229e21736a4
created_at: 2023-08-16T22:42:24.841830Z
updated_at: 2023-08-16T22:45:12.325015Z
title: "Merging FBX Animation onto GLB Skeleton"
---

# Merging FBX Animation onto GLB Skeleton

## Metadata

- Claude conversation UUID: `ebb4e752-c96b-4f07-88a9-e229e21736a4`
- Created: `2023-08-16T22:42:24.841830Z`
- Updated: `2023-08-16T22:45:12.325015Z`
- Message count: 6
- Transcript chars extracted: 3730

## Quick excerpt

Here are a few steps to add an exported animation in FBX format to a glTF (.glb) file with the same skeleton: 1. Import the .fbx file into your 3D modeling software like Blender. This will import the skeleton and animation. 2. Also import the .glb file into Blender. This contains the model you want to apply the animation to. 3. Make sure the skeletons in both imports match. You may need to align joints/bones if they are differently named. 4. With the model from .glb file selected, go to the Anim

## Transcript

## human\n\nhow can i add an exported animation in a fbx file to a glb file with the same skeleton\n
## assistant\n\nHere are a few steps to add an exported animation in FBX format to a glTF (.glb) file with the same skeleton:

1. Import the .fbx file into your 3D modeling software like Blender. This will import the skeleton and animation.

2. Also import the .glb file into Blender. This contains the model you want to apply the animation to. 

3. Make sure the skeletons in both imports match. You may need to align joints/bones if they are differently named.

4. With the model from .glb file selected, go to the Animation tab in Blender. Set the armature/skeleton to the one from the .fbx import. 

5. In the Action Editor, select the animation action you want to transfer. Click the 'Push Down' button to apply this action to the selected model.

6. Now the model from the .glb file should have the same animation as the .fbx file. 

7. Select the model and armature, and export it back out to a .glb file to save the animation.

The key steps are ensuring the skeletons match, and using the 'Push Down' action transfer in Blender. This bakes the animation onto the model with the target skeleton.\n
## human\n\nhow can i do it programatically\n
## assistant\n\nTo programmatically add an animation from an FBX file to a glTF model with the same skeleton, you can follow these steps:

1. Load the FBX file using an FBX parser in your chosen programming language. This gives you access to the skeleton hierarchy, bones, and animation data.

2. Load the glTF file using a glTF parser. This gives you the scene, nodes, skins etc.

3. Match the bone nodes from the FBX skeleton to the nodes in the glTF skin. Essentially associate the bones between the two files.

4. Extract the animation curves for each bone from the FBX animation. These define translation/rotation/scale over time. 

5. Apply the animation curves to the corresponding nodes in the glTF scene. Most glTF parsers allow setting animation samplers on nodes.

6. Export the glTF back out with the animation added to the nodes.

So in code you are reproducing the same steps done in Blender - matching skeletons, obtaining animation data, transferring to the target model. Libraries like Assimp, libfbxsdk, glTF-Transform can help parse and export the files.

The key is correlating the bones/nodes between the two formats, and applying the animation curves to the glTF skeleton. This bakes the animation onto the model programmatically.\n
## human\n\ncan you write three.js code to do this from two local files\n
## assistant\n\nHere is some sample code using Three.js to transfer an animation from an FBX file to a glTF model with matching skeletons:

```js
// Load FBX 
const fbxLoader = new FBXLoader();
const fbx = await fbxLoader.loadAsync('animation.fbx'); 

// Get skeleton from FBX
const boneMap = new Map();
fbx.traverse(child => {
  if (child.isBone) {
    boneMap.set(child.name, child);
  } 
});

// Load glTF
const gltfLoader = new GLTFLoader();
const gltf = await gltfLoader.loadAsync('model.glb');

// Match FBX bones to glTF nodes
const skeleton = gltf.scene.children.find(child => child.isSkinnedMesh);
skeleton.skeleton.bones.forEach(bone => {
  const fbxBone = boneMap.get(bone.name);
  if (fbxBone) {
    // Transfer animation
    bone.animations = fbxBone.animations; 
  }
});

// Play animation
const mixer = new AnimationMixer(skeleton);
const clip = gltf.animations[0]; 
const action = mixer.clipAction(clip);
action.play();

// Render loop 
function render() {
  mixer.update(delta);
  
  requestAnimationFrame(render);
}
```

This loads the FBX and glTF files, matches bones by name, transfers the animation clips, and plays the animation on the glTF model. The same approach works for longer animations split across multiple actions.\n