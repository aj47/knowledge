import { AbsoluteFill, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { ConvergenceScene } from "./scenes/ConvergenceScene";
import { AlphaDropScene } from "./scenes/AlphaDropScene";
import { KillerInsightScene } from "./scenes/KillerInsightScene";
import { CTAScene } from "./scenes/CTAScene";

export const AgentsStandardVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0f" }}>
      <TransitionSeries>
        {/* Scene 1: Hook — 0-5s (150 frames) */}
        <TransitionSeries.Sequence durationInFrames={5 * fps}>
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 10 })}
        />

        {/* Scene 2: The Problem — 5-12s (210 frames) */}
        <TransitionSeries.Sequence durationInFrames={7 * fps}>
          <ProblemScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 3: The Convergence — 12-22s (300 frames) */}
        <TransitionSeries.Sequence durationInFrames={10 * fps}>
          <ConvergenceScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 4: Alpha Drop — 22-38s (480 frames) */}
        <TransitionSeries.Sequence durationInFrames={16 * fps}>
          <AlphaDropScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 5: Killer Insight — 38-48s (300 frames) */}
        <TransitionSeries.Sequence durationInFrames={10 * fps}>
          <KillerInsightScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 6: CTA — 48-60s (360 frames) */}
        <TransitionSeries.Sequence durationInFrames={12 * fps}>
          <CTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
