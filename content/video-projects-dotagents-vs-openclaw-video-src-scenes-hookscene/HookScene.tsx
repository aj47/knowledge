import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Flickering red error glow for first 20 frames
  const errorFlicker =
    frame < 20 ? (frame % 4 < 2 ? 0.3 : 0.05) : 0;

  // Token counter rapidly incrementing
  const tokenCount = Math.floor(
    interpolate(frame, [0, 8 * fps], [0, 4000], {
      extrapolateRight: "clamp",
    })
  );

  const dollarAmount = (tokenCount * 0.01).toFixed(2);

  // Main text slams in
  const textEntrance = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  const textScale = interpolate(textEntrance, [0, 1], [3, 1]);
  const textOpacity = interpolate(textEntrance, [0, 1], [0, 1]);

  // Dollar amount pulses red
  const dollarScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 8, stiffness: 150 },
  });

  const dollarScaleVal = interpolate(dollarScale, [0, 1], [0.5, 1]);

  // Scanline
  const scanlineY = interpolate(frame, [0, 8 * fps], [0, 1920]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Audio src={staticFile("audio/scene1-hook.wav")} />

      {/* Red error glow */}
      <AbsoluteFill
        style={{
          backgroundColor: "#ff2233",
          opacity: errorFlicker,
          mixBlendMode: "overlay",
        }}
      />

      {/* Scanline */}
      <div
        style={{
          position: "absolute",
          top: scanlineY,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: "rgba(255, 34, 51, 0.2)",
        }}
      />

      {/* Token counter in top right */}
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 60,
          fontFamily: "SF Mono, Menlo, monospace",
          fontSize: 36,
          color: "#ff4444",
          opacity: interpolate(frame, [0, 10], [0, 0.7], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        tokens: {tokenCount.toLocaleString()}
      </div>

      {/* Main text */}
      <div
        style={{
          opacity: textOpacity,
          transform: `scale(${textScale})`,
          textAlign: "center",
          padding: "0 60px",
        }}
      >
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 48,
            fontWeight: 700,
            color: "#888888",
            lineHeight: 1.4,
          }}
        >
          API credits burned.
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 96,
            fontWeight: 900,
            color: "#ff2233",
            marginTop: 20,
            transform: `scale(${dollarScaleVal})`,
          }}
        >
          ${dollarAmount}
        </div>
        <div
          style={{
            fontFamily: "SF Mono, Menlo, monospace",
            fontSize: 40,
            fontWeight: 600,
            color: "#666666",
            marginTop: 30,
          }}
        >
          While you slept.
        </div>
      </div>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
