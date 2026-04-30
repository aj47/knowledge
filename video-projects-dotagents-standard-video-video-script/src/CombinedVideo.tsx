import {
  AbsoluteFill,
  OffthreadVideo,
  useVideoConfig,
  staticFile,
  Sequence,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { ConvergenceScene } from "./scenes/ConvergenceScene";
import { AlphaDropScene } from "./scenes/AlphaDropScene";
import { KillerInsightScene } from "./scenes/KillerInsightScene";
import { CTAScene } from "./scenes/CTAScene";

export const CombinedVideo: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0f" }}>
      {/* Layer 1: Avatar video as background */}
      <AbsoluteFill>
        <OffthreadVideo
          src={staticFile("Avatar_IV_Video.mp4")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Layer 2: Remotion graphics overlay (transparent bg) */}
      <AbsoluteFill>
        <TransitionSeries>
          {/* Scene 1: Hook — 0-5s */}
          <TransitionSeries.Sequence durationInFrames={Math.round(5 * fps)}>
            <HookScene />
          </TransitionSeries.Sequence>

          <TransitionSeries.Transition
            presentation={fade()}
            timing={linearTiming({ durationInFrames: Math.round(fps * 0.33) })}
          />

          {/* Scene 2: The Problem — 5-12s */}
          <TransitionSeries.Sequence durationInFrames={Math.round(7 * fps)}>
            <ProblemScene />
          </TransitionSeries.Sequence>

          <TransitionSeries.Transition
            presentation={slide({ direction: "from-bottom" })}
            timing={linearTiming({ durationInFrames: Math.round(fps * 0.5) })}
          />

          {/* Scene 3: The Convergence — 12-22s */}
          <TransitionSeries.Sequence durationInFrames={Math.round(10 * fps)}>
            <ConvergenceScene />
          </TransitionSeries.Sequence>

          <TransitionSeries.Transition
            presentation={fade()}
            timing={linearTiming({ durationInFrames: Math.round(fps * 0.4) })}
          />

          {/* Scene 4: Alpha Drop — 22-38s */}
          <TransitionSeries.Sequence durationInFrames={Math.round(16 * fps)}>
            <AlphaDropScene />
          </TransitionSeries.Sequence>

          <TransitionSeries.Transition
            presentation={fade()}
            timing={linearTiming({ durationInFrames: Math.round(fps * 0.5) })}
          />

          {/* Scene 5: Killer Insight — 38-48s */}
          <TransitionSeries.Sequence durationInFrames={Math.round(10 * fps)}>
            <KillerInsightScene />
          </TransitionSeries.Sequence>

          <TransitionSeries.Transition
            presentation={slide({ direction: "from-right" })}
            timing={linearTiming({ durationInFrames: Math.round(fps * 0.5) })}
          />

          {/* Scene 6: CTA — 48-56s (trimmed to match avatar length) */}
          <TransitionSeries.Sequence durationInFrames={Math.round(8 * fps)}>
            <CTAScene />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
