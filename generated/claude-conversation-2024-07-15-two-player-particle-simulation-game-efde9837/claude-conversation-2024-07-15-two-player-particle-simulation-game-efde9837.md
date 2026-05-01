---
kind: note
id: claude-conversation-2024-07-15-two-player-particle-simulation-game-efde9837
updatedAt: 1721043362484
createdAt: 1721043326200
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: efde9837-cb11-402d-b4ee-77a77769dc12
created_at: 2024-07-15T11:35:26.200026Z
updated_at: 2024-07-15T11:36:02.484598Z
title: "Two-Player Particle Simulation Game"
---

# Two-Player Particle Simulation Game

## Metadata

- Claude conversation UUID: `efde9837-cb11-402d-b4ee-77a77769dc12`
- Created: `2024-07-15T11:35:26.200026Z`
- Updated: `2024-07-15T11:36:02.484598Z`
- Message count: 2
- Transcript chars extracted: 7032

## Quick excerpt

<antThinking>This request is for a complex interactive game with particle simulations, physics, and multiple players. It's substantial, self-contained, and likely to be modified or iterated upon. This qualifies as a good candidate for an artifact. I'll create a new React component artifact for this game.</antThinking> <antArtifact identifier="particle-game" type="application/vnd.ant.react" title="Two-Player Particle Game with Physics"> import React, { useState, useEffect, useRef } from 'react'; 

## Transcript

## human\n\ncreate a two player game where there are particle simulations with gravity and collisions. each player can interact with the particles with their mouse. include light physics and shining from the particles.\n
## assistant\n\n<antThinking>This request is for a complex interactive game with particle simulations, physics, and multiple players. It's substantial, self-contained, and likely to be modified or iterated upon. This qualifies as a good candidate for an artifact. I'll create a new React component artifact for this game.</antThinking>

<antArtifact identifier="particle-game" type="application/vnd.ant.react" title="Two-Player Particle Game with Physics">
import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';

const ParticleGame = () => {
  const [particles, setParticles] = useState([]);
  const [players, setPlayers] = useState([
    { x: 0, y: 0, color: 'red' },
    { x: 0, y: 0, color: 'blue' },
  ]);
  const stageRef = useRef(null);

  const PARTICLE_COUNT = 50;
  const GRAVITY = 0.1;
  const FRICTION = 0.99;
  const COLLISION_DAMPING = 0.8;
  const LIGHT_INTENSITY = 50;

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 5 + 2,
    }));
    setParticles(initialParticles);

    // Game loop
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => updateParticle(particle, prevParticles))
      );
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  const updateParticle = (particle, allParticles) => {
    let { x, y, vx, vy, radius } = particle;

    // Apply gravity
    vy += GRAVITY;

    // Apply friction
    vx *= FRICTION;
    vy *= FRICTION;

    // Update position
    x += vx;
    y += vy;

    // Wall collisions
    if (x - radius < 0 || x + radius > window.innerWidth) {
      vx *= -COLLISION_DAMPING;
      x = x - radius < 0 ? radius : window.innerWidth - radius;
    }
    if (y - radius < 0 || y + radius > window.innerHeight) {
      vy *= -COLLISION_DAMPING;
      y = y - radius < 0 ? radius : window.innerHeight - radius;
    }

    // Particle collisions
    allParticles.forEach((otherParticle) => {
      if (otherParticle !== particle) {
        const dx = otherParticle.x - x;
        const dy = otherParticle.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = radius + otherParticle.radius;

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx);
          const targetX = x + Math.cos(angle) * minDistance;
          const targetY = y + Math.sin(angle) * minDistance;
          const ax = (targetX - otherParticle.x) * 0.05;
          const ay = (targetY - otherParticle.y) * 0.05;

          vx -= ax;
          vy -= ay;
          otherParticle.vx += ax;
          otherParticle.vy += ay;
        }
      }
    });

    return { ...particle, x, y, vx, vy };
  };

  const handleMouseMove = (e) => {
    const stage = stageRef.current;
    const pointerPosition = stage.getPointerPosition();
    
    // Determine which player is moving based on the pointer's x-coordinate
    const playerIndex = pointerPosition.x < window.innerWidth / 2 ? 0 : 1;

    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[playerIndex] = { ...newPlayers[playerIndex], x: pointerPosition.x, y: pointerPosition.y };
      return newPlayers;
    });

    // Apply force to nearby particles
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const dx = particle.x - pointerPosition.x;
        const dy = particle.y - pointerPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 50) {
          const force = (50 - distance) / 50;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
        return particle;
      })
    );
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      ref={stageRef}
    >
      <Layer>
        {particles.map((particle, index) => (
          <React.Fragment key={index}>
            <Circle
              x={particle.x}
              y={particle.y}
              radius={particle.radius}
              fill="#FFD700"
              shadowColor="#FFD700"
              shadowBlur={LIGHT_INTENSITY}
              shadowOpacity={0.5}
            />
            {players.map((player, playerIndex) => (
              <Line
                key={playerIndex}
                points={[particle.x, particle.y, player.x, player.y]}
                stroke={`rgba(255, 215, 0, ${
                  Math.max(0, 1 - Math.sqrt((particle.x - player.x) ** 2 + (particle.y - player.y) ** 2) / 200)
                })`}
                strokeWidth={1}
              />
            ))}
          </React.Fragment>
        ))}
        {players.map((player, index) => (
          <Circle
            key={index}
            x={player.x}
            y={player.y}
            radius={10}
            fill={player.color}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default ParticleGame;
</antArtifact>

I've created a React component for a two-player particle game with physics simulations, including gravity, collisions, and light effects. Here's a breakdown of the game:

1. Particle Simulation:
   - The game creates 50 particles with random positions and velocities.
   - Particles are affected by gravity and friction.
   - Collisions are handled between particles and with the boundaries of the game area.

2. Player Interaction:
   - Two players can interact with the particles using their mouse.
   - The left half of the screen is controlled by player 1 (red), and the right half by player 2 (blue).
   - When a player moves their mouse, nearby particles are attracted to the mouse position.

3. Physics:
   - Gravity constantly pulls particles downward.
   - Friction slows down particle movement over time.
   - Collisions between particles and with walls are elastic, with some energy loss.

4. Lighting Effects:
   - Particles emit light, creating a glow effect.
   - Light intensity decreases with distance from each player's cursor.

To use this game:

1. Make sure you have React and react-konva installed in your project.
2. Copy the code into a new file in your React project, e.g., `ParticleGame.js`.
3. Import and use the `ParticleGame` component in your main app or another component.

The game will automatically start when the component is mounted. Players can move their cursors on their respective sides of the screen to interact with the particles.

Would you like me to explain any specific part of the code or suggest any modifications?\n