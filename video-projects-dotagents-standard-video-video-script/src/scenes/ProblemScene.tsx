import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const TOOLS = [
  { name: ".claude/", color: "#ff6b35", x: -300, y: -400 },
  { name: ".opencode/", color: "#3b82f6", x: 250, y: -200 },
  { name: "AGENTS.md", color: "#a855f7", x: -200, y: 100 },
  { name: ".cursor/", color: "#f59e0b", x: 300, y: 300 },
  { name: ".codex/", color: "#ef4444", x: -100, y: 400 },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Chaotic tool names flying in */}
      {TOOLS.map((tool, i) => {
        const delay = i * 8;
        const entrance = spring({
          frame: frame - delay,
          fps,
          config: { damping: 8, stiffness: 150 },
        });

        const drift = interpolate(
          frame,
          [delay, delay + 5 * fps],
          [0, 30],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
        );

        const rotate = interpolate(
          frame,
          [delay, delay + 5 * fps],
          [0, (i % 2 === 0 ? 1 : -1) * 8],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
        );

        return (
          <div
            key={tool.name}
            style={{
              position: "absolute",
              left: 540 + tool.x,
              top: 960 + tool.y,
              transform: `scale(${entrance}) rotate(${rotate}deg) translateY(${drift}px)`,
              fontFamily: "SF Mono, Menlo, monospace",
              fontSize: 48,
              fontWeight: 800,
              color: tool.color,
              textShadow: `0 0 30px ${tool.color}80, 0 2px 8px rgba(0,0,0,0.9)`,
              whiteSpace: "nowrap",
              WebkitTextStroke: "1px rgba(0,0,0,0.3)",
            }}
          >
            {tool.name}
          </div>
        );
      })}

      {/* "Locked inside each tool" text */}
      <Sequence from={Math.round(2.5 * fps)} premountFor={fps}>
        <AbsoluteFill
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 200,
          }}
        >
          <LockedText />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

const LockedText: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`,
        textAlign: "center",
        padding: "20px 60px",
        backgroundColor: "rgba(10, 10, 15, 0.8)",
        borderRadius: 16,
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 42,
          fontWeight: 600,
          color: "#ff4444",
          lineHeight: 1.5,
        }}
      >
        You switch tools,{"\n"}you lose everything.
      </div>
    </div>
  );
};
