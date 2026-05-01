import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

const STATS = [
  {
    text: "216k stars ≠ 216k daily users",
    color: "#ff6666",
    delay: 10,
  },
  {
    text: "8,800 open issues",
    color: "#ff6666",
    delay: 45,
  },
  {
    text: "Voice-first • Desktop overlay • Multi-agent",
    color: "#00ff88",
    delay: 80,
  },
  {
    text: "One rebrand vs three",
    color: "#00ff88",
    delay: 115,
  },
];

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 50px",
      }}
    >
      <Audio src={staticFile("audio/scene6-stats.wav")} />

      {/* Counter animation for 216k */}
      <div
        style={{
          position: "absolute",
          top: 140,
          opacity: interpolate(frame, [0, 20], [0, 0.06], {
            extrapolateRight: "clamp",
          }),
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 200,
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: -5,
        }}
      >
        {Math.min(
          216000,
          Math.round(
            interpolate(frame, [0, 60], [0, 216000], {
              extrapolateRight: "clamp",
            })
          )
        ).toLocaleString()}
      </div>

      {/* Stat cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 36,
          width: "100%",
          zIndex: 2,
        }}
      >
        {STATS.map((stat, i) => {
          const entrance = spring({
            frame: frame - stat.delay,
            fps,
            config: { damping: 14, stiffness: 180 },
          });

          const scale = interpolate(entrance, [0, 1], [0.8, 1]);
          const opacity = interpolate(entrance, [0, 1], [0, 1]);
          const translateX = interpolate(entrance, [0, 1], [i % 2 === 0 ? -60 : 60, 0]);

          const isRed = stat.color === "#ff6666";

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${translateX}px) scale(${scale})`,
                backgroundColor: isRed
                  ? "rgba(255, 34, 51, 0.06)"
                  : "rgba(0, 255, 136, 0.06)",
                border: `1px solid ${isRed ? "rgba(255, 68, 68, 0.25)" : "rgba(0, 255, 136, 0.25)"}`,
                borderRadius: 16,
                padding: "28px 36px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "SF Mono, Menlo, monospace",
                  fontSize: 36,
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1.3,
                }}
              >
                {stat.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle scan line effect */}
      <AbsoluteFill
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 0, 0, 0.03) 3px,
            rgba(0, 0, 0, 0.03) 6px
          )`,
          pointerEvents: "none",
        }}
      />

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
