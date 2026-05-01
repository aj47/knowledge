import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Glitch flicker for first 15 frames
  const glitchOpacity =
    frame < 15 ? (Math.random() > 0.5 ? 0.05 : 0.3) : 0;

  // Main text slams in with spring
  const textEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const textScale = interpolate(textEntrance, [0, 1], [3, 1]);
  const textOpacity = interpolate(textEntrance, [0, 1], [0, 1]);

  // Scanline effect
  const scanlineY = interpolate(frame, [0, 5 * fps], [0, 1920]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glitch overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: "#00ff88",
          opacity: glitchOpacity,
          mixBlendMode: "overlay",
        }}
      />

      {/* Scanline */}
      <div
        style={{
          position: "absolute",
          top: scanlineY,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: "rgba(0, 255, 136, 0.15)",
        }}
      />

      {/* Main text with dark backing for readability */}
      <div
        style={{
          opacity: textOpacity,
          transform: `scale(${textScale})`,
          textAlign: "center",
          padding: "40px 60px",
          backgroundColor: "rgba(10, 10, 15, 0.75)",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.4,
          }}
        >
          Every AI tool has its own
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 72,
            fontWeight: 900,
            color: "#00ff88",
            marginTop: 20,
          }}
        >
          config folder.
        </div>
      </div>

      {/* Subtle vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
