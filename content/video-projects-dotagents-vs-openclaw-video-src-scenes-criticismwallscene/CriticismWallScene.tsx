import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

const CRITICISMS = [
  "Burns through tokens insanely fast",
  "Gets stuck in infinite loops",
  "Deleted my entire F: drive",
  "8,800 open issues",
  "Rebranded 3 times",
  "Feels like babysitting an intern",
  "Setup is overly complex",
  "Falls asleep mid-task",
  "Runs 24/7 consuming credits",
  "Creates more work than it saves",
];

export const CriticismWallScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background red pulse
  const redPulse = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [0.02, 0.08]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 40px",
      }}
    >
      <Audio src={staticFile("audio/scene2-criticism.wav")} />

      {/* Red ambient glow */}
      <AbsoluteFill
        style={{
          backgroundColor: "#ff2233",
          opacity: redPulse,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 100,
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 38,
          fontWeight: 700,
          color: "#ff4444",
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        OpenClaw Users Say:
      </div>

      {/* Criticism cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          marginTop: 60,
          width: "100%",
          maxWidth: 960,
        }}
      >
        {CRITICISMS.map((text, i) => {
          const delay = i * 8;
          const entrance = spring({
            frame: frame - delay,
            fps,
            config: { damping: 15, stiffness: 180 },
          });

          const translateX = interpolate(entrance, [0, 1], [i % 2 === 0 ? -600 : 600, 0]);
          const opacity = interpolate(entrance, [0, 1], [0, 1]);

          // Subtle shake on each card
          const shake = frame > delay + 10
            ? Math.sin((frame - delay) * 0.5) * 2
            : 0;

          return (
            <div
              key={i}
              style={{
                transform: `translateX(${translateX + shake}px)`,
                opacity,
                backgroundColor: "rgba(255, 34, 51, 0.08)",
                border: "1px solid rgba(255, 68, 68, 0.3)",
                borderRadius: 12,
                padding: "16px 28px",
                fontFamily: "SF Mono, Menlo, monospace",
                fontSize: 34,
                fontWeight: 600,
                color: "#ff6666",
                lineHeight: 1.3,
              }}
            >
              "{text}"
            </div>
          );
        })}
      </div>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
