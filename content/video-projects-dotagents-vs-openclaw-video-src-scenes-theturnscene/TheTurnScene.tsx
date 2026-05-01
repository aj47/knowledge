import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

export const TheTurnScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Everything fades to black first
  const blackout = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Green glow emerges
  const greenGlow = interpolate(frame, [30, 60], [0, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo entrance with spring
  const logoEntrance = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const logoScale = interpolate(logoEntrance, [0, 1], [0.3, 1]);
  const logoOpacity = interpolate(logoEntrance, [0, 1], [0, 1]);

  // Text entrance
  const textEntrance = spring({
    frame: frame - 80,
    fps,
    config: { damping: 200 },
  });

  const textOpacity = interpolate(textEntrance, [0, 1], [0, 1]);
  const textY = interpolate(textEntrance, [0, 1], [40, 0]);

  // Subtle breathing glow on the logo
  const breathe = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [0.8, 1]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Audio src={staticFile("audio/scene3-turn.wav")} />

      {/* Green ambient glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 255, 136, 0.2) 0%, transparent 60%)",
          opacity: greenGlow * breathe,
        }}
      />

      {/* DotAgents "logo" text */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 88,
            fontWeight: 900,
            color: "#00ff88",
            textShadow: "0 0 60px rgba(0, 255, 136, 0.4)",
          }}
        >
          DotAgents
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          bottom: 600,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
          padding: "0 60px",
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 48,
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.5,
          }}
        >
          What if your agent
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 56,
            fontWeight: 800,
            color: "#00ff88",
            marginTop: 10,
          }}
        >
          just... worked?
        </div>
      </div>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
