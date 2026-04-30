import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoEntrance = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 120 },
  });

  const taglineEntrance = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  const linkEntrance = spring({
    frame: frame - 40,
    fps,
    config: { damping: 200 },
  });

  const starsDelay = 50;
  const starsProgress = interpolate(
    frame - starsDelay,
    [0, 2 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const starsCount = Math.floor(interpolate(starsProgress, [0, 1], [0, 200]));

  const ctaPulse = interpolate(
    Math.sin(frame * 0.06),
    [-1, 1],
    [0.6, 1]
  );

  const gradientAngle = interpolate(frame, [0, 12 * fps], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Semi-transparent backdrop */}
      <AbsoluteFill
        style={{
          backgroundColor: "rgba(10, 10, 15, 0.7)",
        }}
      />

      {/* Animated background glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `conic-gradient(from ${gradientAngle}deg, rgba(0,255,136,0.12), rgba(59,130,246,0.12), rgba(168,85,247,0.12), rgba(0,255,136,0.12))`,
          filter: "blur(80px)",
        }}
      />

      {/* Logo / Brand */}
      <div
        style={{
          transform: `scale(${logoEntrance})`,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            backgroundColor: "#00ff88",
            margin: "0 auto 30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `0 0 ${60 * ctaPulse}px rgba(0,255,136,0.4)`,
          }}
        >
          <div
            style={{
              fontFamily: "SF Mono, Menlo, monospace",
              fontSize: 48,
              fontWeight: 900,
              color: "#0a0a0f",
            }}
          >
            .a
          </div>
        </div>

        <div
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: -2,
            textShadow: "0 4px 12px rgba(0,0,0,0.8)",
          }}
        >
          DotAgents
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineEntrance,
          transform: `translateY(${interpolate(taglineEntrance, [0, 1], [30, 0])}px)`,
          textAlign: "center",
          marginTop: 30,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 36,
            fontWeight: 500,
            color: "#ddd",
            lineHeight: 1.5,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          Voice-first agent desktop.
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 32,
            fontWeight: 600,
            color: "#00ff88",
            marginTop: 10,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          .agents/ native support shipping now
        </div>
      </div>

      {/* GitHub link + stars */}
      <div
        style={{
          opacity: linkEntrance,
          transform: `translateY(${interpolate(linkEntrance, [0, 1], [30, 0])}px)`,
          textAlign: "center",
          marginTop: 60,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 30,
            color: "#3b82f6",
            marginBottom: 20,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          github.com/aj47/speakmcp
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 16,
            padding: "12px 32px",
          }}
        >
          <span style={{ fontSize: 32 }}>⭐</span>
          <span
            style={{
              fontFamily: "SF Mono, Menlo, monospace",
              fontSize: 36,
              fontWeight: 700,
              color: "#f59e0b",
            }}
          >
            {starsCount}
          </span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          opacity: interpolate(frame, [3 * fps, 4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          fontFamily: "system-ui, sans-serif",
          fontSize: 32,
          fontWeight: 700,
          color: "#00ff88",
          textShadow: `0 0 ${30 * ctaPulse}px rgba(0,255,136,0.5), 0 2px 8px rgba(0,0,0,0.9)`,
          zIndex: 1,
        }}
      >
        Go drop a ⭐
      </div>
    </AbsoluteFill>
  );
};
