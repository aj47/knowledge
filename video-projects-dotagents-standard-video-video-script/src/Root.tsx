import { Composition } from "remotion";
import { AgentsStandardVideo } from "./AgentsStandardVideo";
import { CombinedVideo } from "./CombinedVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Graphics only (for preview) */}
      <Composition
        id="AgentsStandard"
        component={AgentsStandardVideo}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
      {/* Combined: Avatar + Graphics overlay */}
      <Composition
        id="Combined"
        component={CombinedVideo}
        durationInFrames={1401}
        fps={25}
        width={1080}
        height={1920}
      />
    </>
  );
};
