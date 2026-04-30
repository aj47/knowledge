import { AbsoluteFill, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { CriticismWallScene } from "./scenes/CriticismWallScene";
import { TheTurnScene } from "./scenes/TheTurnScene";
import { ComparisonGridScene } from "./scenes/ComparisonGridScene";
import { TheStandardScene } from "./scenes/TheStandardScene";
import { StatsScene } from "./scenes/StatsScene";
import { CTAScene } from "./scenes/CTAScene";

export const DotAgentsVsOpenClaw: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0f" }}>
      <TransitionSeries>
        {/* Scene 1: Hook — 8s (VO: 7.58s) */}
        <TransitionSeries.Sequence durationInFrames={8 * fps}>
          <HookScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 2: Criticism Wall — 11s (VO: 10.96s) */}
        <TransitionSeries.Sequence durationInFrames={11 * fps}>
          <CriticismWallScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 3: The Turn — 9s (VO: 8.14s) */}
        <TransitionSeries.Sequence durationInFrames={9 * fps}>
          <TheTurnScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 4: Comparison Grid — 24s (VO: 22.96s) */}
        <TransitionSeries.Sequence durationInFrames={24 * fps}>
          <ComparisonGridScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 5: The Standard — 15s (VO: 14.68s) */}
        <TransitionSeries.Sequence durationInFrames={15 * fps}>
          <TheStandardScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />

        {/* Scene 6: Stats — 16s (VO: 15.25s) */}
        <TransitionSeries.Sequence durationInFrames={16 * fps}>
          <StatsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* Scene 7: CTA — 15s (VO: 11.49s) */}
        <TransitionSeries.Sequence durationInFrames={15 * fps}>
          <CTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
