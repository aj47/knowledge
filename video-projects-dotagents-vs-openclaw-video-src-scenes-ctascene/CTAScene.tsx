import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo entrance
  const logoSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 8, stiffness: 120 },
  });

  // Tagline entrance
  const taglineSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 200 },
  });

  // Button pulse
  const pulse = Math.sin(frame * 0.08) * 0.03 + 1;
  const buttonEntrance = spring({
    frame: frame - 70,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  // Links entrance
  const linksEntrance = spring({
    frame: frame - 100,
    fps,
    config: { damping: 200 },
  });

  // Closing line
  const closingEntrance = spring({
    frame: frame - 160,
    fps,
    config: { damping: 200 },
  });

  // Background glow pulse
  const glowOpacity = interpolate(
    Math.sin(frame * 0.04),
    [-1, 1],
    [0.15, 0.35]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Audio src={staticFile("audio/scene7-cta.wav")} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(0, 255, 136, ${glowOpacity}) 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoSpring})`,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "rgba(0, 255, 136, 0.12)",
            border: "3px solid #00ff88",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 28,
            fontWeight: 800,
            color: "#00ff88",
          }}
        >
          .agents
        </div>
      </div>

      {/* Main headline */}
      <div
        style={{
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 52,
          fontWeight: 800,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.2,
          opacity: interpolate(taglineSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(taglineSpring, [0, 1], [30, 0])}px)`,
          maxWidth: 800,
          marginBottom: 50,
        }}
      >
        Download DotAgents.{"\n"}
        <span style={{ color: "#00ff88" }}>Talk to your computer.</span>
      </div>

      {/* Download button */}
      <div
        style={{
          transform: `scale(${interpolate(buttonEntrance, [0, 1], [0, 1]) * pulse})`,
          backgroundColor: "#00ff88",
          borderRadius: 20,
          padding: "24px 64px",
          marginBottom: 50,
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 32,
            fontWeight: 800,
            color: "#0a0a0f",
          }}
        >
          ↓ Download Now
        </div>
      </div>

      {/* Links */}
      <div
        style={{
          opacity: interpolate(linksEntrance, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(linksEntrance, [0, 1], [20, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 26,
            color: "#88ddff",
          }}
        >
          github.com/aj47/dotagents-mono
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 26,
            color: "#88ddff",
          }}
        >
          dotagentsprotocol.com
        </div>
      </div>

      {/* Closing line */}
      <div
        style={{
          opacity: interpolate(closingEntrance, [0, 1], [0, 1]),
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 28,
          fontWeight: 600,
          color: "#667788",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        OpenClaw is a science experiment.{"\n"}
        <span style={{ color: "#00ff88", fontWeight: 700 }}>
          DotAgents is the product.
        </span>
      </div>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
