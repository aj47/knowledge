import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Sequence,
} from "remotion";

export const KillerInsightScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      {/* Split comparison */}
      <Sequence from={0} durationInFrames={6 * fps} premountFor={fps}>
        <SplitComparison />
      </Sequence>

      {/* "package.json moment" punchline */}
      <Sequence from={6 * fps} premountFor={fps}>
        <PunchLine />
      </Sequence>
    </AbsoluteFill>
  );
};

const SplitComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const leftEntrance = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const rightEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill style={{ flexDirection: "row" }}>
      {/* Left: the old way (red) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: leftEntrance,
          transform: `translateX(${interpolate(leftEntrance, [0, 1], [-60, 0])}px)`,
          borderRight: "2px solid rgba(255,255,255,0.2)",
          padding: 40,
          backgroundColor: "rgba(10, 10, 15, 0.75)",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 30 }}>❌</div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 30,
            fontWeight: 600,
            color: "#ff4444",
            textAlign: "center",
            lineHeight: 1.6,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          Copy configs{"\n"}between tools
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 22,
            color: "#999",
            marginTop: 30,
            textAlign: "center",
            lineHeight: 2,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          .claude/ → copy{"\n"}.opencode/ → copy{"\n"}.cursor/ → copy{"\n"}🔄 repeat forever
        </div>
      </div>

      {/* Right: .agents/ way (green) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: rightEntrance,
          transform: `translateX(${interpolate(rightEntrance, [0, 1], [60, 0])}px)`,
          padding: 40,
          backgroundColor: "rgba(10, 10, 15, 0.75)",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 30 }}>✅</div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 30,
            fontWeight: 600,
            color: "#00ff88",
            textAlign: "center",
            lineHeight: 1.6,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          Write once in{"\n"}.agents/
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 22,
            color: "rgba(0,255,136,0.7)",
            marginTop: 30,
            textAlign: "center",
            lineHeight: 2,
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          ~/.agents/{"\n"}↓ auto-discovered{"\n"}by every tool
        </div>
      </div>
    </AbsoluteFill>
  );
};

const PunchLine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 100 },
  });

  const scale = interpolate(entrance, [0, 1], [0.5, 1]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  const glow = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [0.4, 1]
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          textAlign: "center",
          padding: "50px 60px",
          backgroundColor: "rgba(10, 10, 15, 0.8)",
          borderRadius: 24,
        }}
      >
        <div
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.4,
            marginBottom: 30,
          }}
        >
          This is the
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 72,
            fontWeight: 900,
            color: "#00ff88",
            textShadow: `0 0 ${40 * glow}px rgba(0,255,136,0.6)`,
          }}
        >
          package.json
        </div>
        <div
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.4,
            marginTop: 20,
          }}
        >
          moment for AI agents.
        </div>

        <div
          style={{
            marginTop: 60,
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 32,
            color: "#ccc",
          }}
        >
          <span style={{ color: "#00ff88", fontWeight: 700 }}>25+</span> tools
          already support it
        </div>
      </div>
    </AbsoluteFill>
  );
};
