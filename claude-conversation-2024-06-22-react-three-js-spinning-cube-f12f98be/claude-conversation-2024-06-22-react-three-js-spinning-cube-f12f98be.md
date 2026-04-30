---
kind: note
id: claude-conversation-2024-06-22-react-three-js-spinning-cube-f12f98be
updatedAt: 1719027170543
createdAt: 1719027125744
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: f12f98be-337b-4320-b4fd-34db97d9447a
created_at: 2024-06-22T03:32:05.744180Z
updated_at: 2024-06-22T03:32:50.543552Z
title: "React Three.js Spinning Cube"
---

# React Three.js Spinning Cube

## Metadata

- Claude conversation UUID: `f12f98be-337b-4320-b4fd-34db97d9447a`
- Created: `2024-06-22T03:32:05.744180Z`
- Updated: `2024-06-22T03:32:50.543552Z`
- Message count: 2
- Transcript chars extracted: 2242

## Quick excerpt

Certainly! I'll create a basic React component that uses React Three Fiber (r3f), which is a React renderer for Three.js, to render a spinning cube. <antThinking>This is a good candidate for an artifact as it's a self-contained React component that uses a 3D library. It's substantial, likely to be modified or reused, and represents a standalone piece of work. I'll create a new artifact for this React component.</antThinking> <antArtifact identifier="spinning-cube-component" type="application/vnd

## Transcript

## human\n\nmake a basic react component that uses react three to render a spinning cube\n
## assistant\n\nCertainly! I'll create a basic React component that uses React Three Fiber (r3f), which is a React renderer for Three.js, to render a spinning cube. 

<antThinking>This is a good candidate for an artifact as it's a self-contained React component that uses a 3D library. It's substantial, likely to be modified or reused, and represents a standalone piece of work. I'll create a new artifact for this React component.</antThinking>

<antArtifact identifier="spinning-cube-component" type="application/vnd.ant.react" title="React Three Fiber Spinning Cube">
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const SpinningCube = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="royalblue" />
    </Box>
  );
};

const SpinningCubeScene = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
      </Canvas>
    </div>
  );
};

export default SpinningCubeScene;
</antArtifact>

I've created a React component that uses React Three Fiber to render a spinning cube. Here's a breakdown of the component:

1. We import necessary dependencies from React, React Three Fiber, and Three.js helpers.
2. The `SpinningCube` component creates a cube using the `Box` component from `@react-three/drei`.
3. We use the `useFrame` hook to rotate the cube on every frame.
4. The `SpinningCubeScene` component sets up the 3D scene with a canvas, lighting, and the spinning cube.

To use this component, you'll need to install the required dependencies:

```
npm install three @react-three/fiber @react-three/drei
```

Then you can import and use the `SpinningCubeScene` component in your React application.

Would you like me to explain any part of the code in more detail or make any modifications to the component?\n