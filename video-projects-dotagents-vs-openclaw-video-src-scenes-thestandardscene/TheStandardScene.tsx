import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

const TOOLS = [
  { name: "Claude Code", angle: 0 },
  { name: "Codex", angle: 72 },
  { name: "Cursor", angle: 144 },
  { name: "Windsurf", angle: 216 },
  { name: "Your Tool", angle: 288 },
];

const FOLDER_LINES = [
  { text: ".agents/", indent: 0, delay: 30 },
  { text: "├── skills/", indent: 1, delay: 40 },
  { text: "│   ├── web-browser.md", indent: 2, delay: 50 },
  { text: "│   └── gmail-calendar.md", indent: 2, delay: 58 },
  { text: "├── memories/", indent: 1, delay: 66 },
  { text: "│   └── user-prefs.json", indent: 2, delay: 74 },
  { text: "├── mcpconfig.json", indent: 1, delay: 82 },
  { text: "└── profiles/", indent: 1, delay: 90 },
  { text: "    └── default.json", indent: 2, delay: 98 },
];

export const TheStandardScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Orbit rotation
  const rotation = interpolate(frame, [0, 450], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "60px 40px",
      }}
    >
      <Audio src={staticFile("audio/scene5-standard.wav")} />

      {/* Title */}
      <div
        style={{
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 42,
          fontWeight: 800,
          color: "#00ff88",
          textAlign: "center",
          marginTop: 60,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: "clamp",
          }),
          transform: `translateY(${interpolate(frame, [0, 20], [20, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        Built on the .agents{"\n"}open standard
      </div>

      {/* Folder tree */}
      <div
        style={{
          marginTop: 60,
          width: "100%",
          maxWidth: 700,
        }}
      >
        {FOLDER_LINES.map((line, i) => {
          const entrance = spring({
            frame: frame - line.delay,
            fps,
            config: { damping: 200 },
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: "SF Mono, Menlo, monospace",
                fontSize: 30,
                color: line.indent === 0 ? "#00ff88" : line.indent === 1 ? "#88ddff" : "#667788",
                fontWeight: line.indent === 0 ? 700 : 400,
                paddingLeft: line.indent * 20,
                marginBottom: 6,
                opacity: interpolate(entrance, [0, 1], [0, 1]),
                transform: `translateX(${interpolate(entrance, [0, 1], [-30, 0])}px)`,
              }}
            >
              {line.text}
            </div>
          );
        })}
      </div>

      {/* Orbiting tools */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
        }}
      >
        {/* Center dot-agents logo */}
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 255, 136, 0.15)",
            border: "2px solid rgba(0, 255, 136, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 18,
            fontWeight: 700,
            color: "#00ff88",
            zIndex: 10,
          }}
        >
          .agents
        </div>

        {/* Orbiting tools */}
        {TOOLS.map((tool, i) => {
          const orbitRadius = 160;
          const angleRad =
            ((tool.angle + rotation) * Math.PI) / 180;
          const x = Math.cos(angleRad) * orbitRadius;
          const y = Math.sin(angleRad) * orbitRadius * 0.5; // elliptical

          const toolEntrance = spring({
            frame: frame - 110 - i * 10,
            fps,
            config: { damping: 12 },
          });

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px) scale(${toolEntrance})`,
                backgroundColor: "rgba(136, 221, 255, 0.1)",
                border: "1px solid rgba(136, 221, 255, 0.3)",
                borderRadius: 20,
                padding: "10px 20px",
                fontFamily: "SF Mono, Menlo, monospace",
                fontSize: 22,
                fontWeight: 600,
                color: "#88ddff",
                whiteSpace: "nowrap",
              }}
            >
              {tool.name}
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
