import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const TREE_LINES = [
  { text: "~/.agents/", indent: 0, color: "#00ff88", isBold: true },
  { text: "├── skills/", indent: 1, color: "#3b82f6", isBold: false },
  { text: "│   └── *.SKILL.md", indent: 2, color: "#6b7280", isBold: false },
  { text: "├── commands/", indent: 1, color: "#f59e0b", isBold: false },
  { text: "│   └── *.md", indent: 2, color: "#6b7280", isBold: false },
  { text: "├── agents/", indent: 1, color: "#a855f7", isBold: false },
  { text: "│   └── *.md", indent: 2, color: "#6b7280", isBold: false },
  { text: "└── AGENTS.md", indent: 1, color: "#ef4444", isBold: false },
];

const LABELS = [
  { text: "← shared across ALL tools", forLine: 1, color: "#3b82f6" },
  { text: "← reusable prompt templates", forLine: 3, color: "#f59e0b" },
  { text: "← agent definitions", forLine: 5, color: "#a855f7" },
  { text: "← project instructions", forLine: 7, color: "#ef4444" },
];

const TOOLS_SUPPORTED = [
  "Claude Code",
  "Codex",
  "Cursor",
  "OpenCode",
  "DotAgents",
  "Aider",
  "25+ more...",
];

export const AlphaDropScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      {/* Terminal window */}
      <div
        style={{
          width: 960,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #555",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            backgroundColor: "rgba(26, 26, 46, 0.95)",
            padding: "12px 20px",
            display: "flex",
            gap: 8,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#ff5f57" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#febc2e" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#28c840" }} />
        </div>

        {/* Terminal body */}
        <div
          style={{
            backgroundColor: "rgba(13, 17, 23, 0.92)",
            padding: "30px 40px",
            minHeight: 500,
          }}
        >
          {TREE_LINES.map((line, i) => {
            const lineDelay = i * 12;
            const typeProgress = interpolate(
              frame - lineDelay,
              [0, 15],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            const charsToShow = Math.floor(typeProgress * line.text.length);
            const displayText = line.text.slice(0, charsToShow);
            const showCursor = typeProgress > 0 && typeProgress < 1;

            const label = LABELS.find((l) => l.forLine === i);
            const labelOpacity =
              label && typeProgress >= 1
                ? spring({
                    frame: frame - lineDelay - 18,
                    fps,
                    config: { damping: 200 },
                  })
                : 0;

            return (
              <div
                key={i}
                style={{
                  fontFamily: "SF Mono, Menlo, monospace",
                  fontSize: line.isBold ? 32 : 28,
                  fontWeight: line.isBold ? 800 : 400,
                  color: line.color,
                  marginLeft: line.indent * 28,
                  lineHeight: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  whiteSpace: "nowrap",
                }}
              >
                <span>{displayText}</span>
                {showCursor && (
                  <span style={{ color: "#00ff88", fontWeight: 400 }}>▊</span>
                )}
                {label && (
                  <span
                    style={{
                      fontSize: 22,
                      color: label.color,
                      opacity: labelOpacity,
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    {label.text}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tool badges scrolling in at bottom */}
      <Sequence from={Math.round(10 * fps)} premountFor={fps}>
        <ToolBadges />
      </Sequence>
    </AbsoluteFill>
  );
};

const ToolBadges: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 160,
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 28,
          color: "#ccc",
          marginBottom: 20,
          opacity: spring({ frame, fps, config: { damping: 200 } }),
          textShadow: "0 2px 8px rgba(0,0,0,0.9)",
        }}
      >
        Works with:
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          maxWidth: 900,
        }}
      >
        {TOOLS_SUPPORTED.map((tool, i) => {
          const entrance = spring({
            frame: frame - i * 5,
            fps,
            config: { damping: 15, stiffness: 200 },
          });

          return (
            <div
              key={tool}
              style={{
                transform: `scale(${entrance})`,
                fontFamily: "system-ui, sans-serif",
                fontSize: 26,
                fontWeight: 600,
                color: "#00ff88",
                backgroundColor: "rgba(0,255,136,0.15)",
                border: "1px solid rgba(0,255,136,0.4)",
                borderRadius: 12,
                padding: "8px 20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
              }}
            >
              {tool}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
