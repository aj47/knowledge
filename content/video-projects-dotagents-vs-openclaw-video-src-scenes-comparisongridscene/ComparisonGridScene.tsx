import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

const COMPARISONS = [
  { label: "Setup", openclaw: "Self-host a server", dotagents: "Download an app" },
  { label: "Interface", openclaw: "Text a bot on WhatsApp", dotagents: "Hold a button and talk" },
  { label: "Cost", openclaw: "Burns tokens 24/7", dotagents: "Only runs when triggered" },
  { label: "Safety", openclaw: "Deleted a user's F: drive", dotagents: "Asks before every action" },
  { label: "Memory", openclaw: "Forgets everything", dotagents: "Remembers across sessions" },
  { label: "Updates", openclaw: "Breaking changes every release", dotagents: "Auto-updates, keeps config" },
];

export const ComparisonGridScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        padding: "80px 40px",
        justifyContent: "center",
      }}
    >
      <Audio src={staticFile("audio/scene4-comparison.wav")} />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 160,
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 36,
            fontWeight: 700,
            color: "#ff4444",
            opacity: interpolate(frame, [0, 15], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          OpenClaw
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 36,
            fontWeight: 700,
            color: "#00ff88",
            opacity: interpolate(frame, [0, 15], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          DotAgents
        </div>
      </div>

      {/* Comparison rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          marginTop: 40,
        }}
      >
        {COMPARISONS.map((item, i) => {
          const rowDelay = 20 + i * 25;
          const entrance = spring({
            frame: frame - rowDelay,
            fps,
            config: { damping: 200 },
          });

          const opacity = interpolate(entrance, [0, 1], [0, 1]);
          const translateY = interpolate(entrance, [0, 1], [30, 0]);

          // Checkmark appears after row
          const checkDelay = rowDelay + 15;
          const checkEntrance = spring({
            frame: frame - checkDelay,
            fps,
            config: { damping: 12, stiffness: 200 },
          });

          const checkScale = interpolate(checkEntrance, [0, 1], [0, 1]);

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${translateY}px)`,
              }}
            >
              {/* Label */}
              <div
                style={{
                  fontFamily: "SF Mono, Menlo, monospace",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#555555",
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>

              {/* Side by side cards */}
              <div style={{ display: "flex", gap: 16 }}>
                {/* OpenClaw - Red */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 34, 51, 0.08)",
                    border: "1px solid rgba(255, 68, 68, 0.25)",
                    borderRadius: 12,
                    padding: "14px 20px",
                    fontFamily: "SF Mono, Menlo, monospace",
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#ff6666",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 24, opacity: 0.6 }}>✕</span>
                  {item.openclaw}
                </div>

                {/* DotAgents - Green */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 255, 136, 0.06)",
                    border: "1px solid rgba(0, 255, 136, 0.25)",
                    borderRadius: 12,
                    padding: "14px 20px",
                    fontFamily: "SF Mono, Menlo, monospace",
                    fontSize: 28,
                    fontWeight: 600,
                    color: "#00ff88",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      transform: `scale(${checkScale})`,
                      display: "inline-block",
                    }}
                  >
                    ✓
                  </span>
                  {item.dotagents}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
