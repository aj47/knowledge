import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

const FRAGMENTS = [
  { label: ".claude/", color: "#ff6b35" },
  { label: ".opencode/", color: "#3b82f6" },
  { label: "AGENTS.md", color: "#a855f7" },
  { label: ".cursor/", color: "#f59e0b" },
  { label: ".codex/", color: "#ef4444" },
];

export const ConvergenceScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const convergenceProgress = interpolate(
    frame,
    [4 * fps, 7 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) }
  );

  const folderEntrance = spring({
    frame: frame - 7 * fps,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const glowPulse =
    frame > 7.5 * fps
      ? interpolate(
          Math.sin((frame - 7.5 * fps) * 0.1),
          [-1, 1],
          [0.3, 0.8]
        )
      : 0;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Orbiting/converging fragments */}
      {FRAGMENTS.map((frag, i) => {
        const angle = (i / FRAGMENTS.length) * Math.PI * 2;
        const orbitRadius = interpolate(
          convergenceProgress,
          [0, 1],
          [350, 0]
        );
        const rotation = frame * 0.02 + angle;
        const x = Math.cos(rotation) * orbitRadius;
        const y = Math.sin(rotation) * orbitRadius * 0.6;

        const fragOpacity = interpolate(
          convergenceProgress,
          [0.7, 1],
          [1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={frag.label}
            style={{
              position: "absolute",
              left: 540 + x - 80,
              top: 960 + y - 20,
              fontFamily: "SF Mono, Menlo, monospace",
              fontSize: 36,
              fontWeight: 700,
              color: frag.color,
              opacity: fragOpacity,
              textShadow: `0 0 20px ${frag.color}80, 0 2px 8px rgba(0,0,0,0.9)`,
              whiteSpace: "nowrap",
            }}
          >
            {frag.label}
          </div>
        );
      })}

      {/* Central .agents/ folder */}
      <div
        style={{
          transform: `scale(${folderEntrance})`,
          textAlign: "center",
          backgroundColor: "rgba(10, 10, 15, 0.8)",
          padding: "40px 60px",
          borderRadius: 24,
        }}
      >
        {/* Glow ring */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(0,255,136,${glowPulse * 0.3}) 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 96,
            fontWeight: 900,
            color: "#00ff88",
            textShadow: `0 0 60px rgba(0,255,136,${glowPulse})`,
          }}
        >
          .agents/
        </div>
        <div
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 36,
            fontWeight: 500,
            color: "#ccc",
            marginTop: 20,
            opacity: interpolate(folderEntrance, [0.5, 1], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          One folder. Every tool reads it.
        </div>
      </div>
    </AbsoluteFill>
  );
};
