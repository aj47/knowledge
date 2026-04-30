import { Composition } from "remotion";
import { DotAgentsVsOpenClaw } from "./DotAgentsVsOpenClaw";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="DotAgentsVsOpenClaw"
      component={DotAgentsVsOpenClaw}
      durationInFrames={2940} // 98s at 30fps
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
