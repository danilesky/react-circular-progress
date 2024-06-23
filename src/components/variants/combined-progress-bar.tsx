import { HTMLProps } from "react";
import SemiCircularProgressBar, {
  SemiCircularProgressBarProps,
} from "../semi-circular-progress-bar";
import SemiCircularProgressClock from "../semi-circular-progress-clock";
import type { SemiCircularProgressClockProps } from "../semi-circular-progress-clock";

interface ClockOptions
  extends Omit<SemiCircularProgressClockProps, "percentage"> {
  positionY?: number;
}

interface BarOptions
  extends Omit<
    SemiCircularProgressBarProps,
    "percentage" | "overflow" | "canvasWidth"
  > {}

interface TextOptions extends HTMLProps<HTMLSpanElement> {
  positionY?: number;
}

interface CombinedProgressBarProps {
  percentage: number;
  canvasWidth: number;
  clockOptions: ClockOptions;
  barOptions: BarOptions;
  textOptions: TextOptions;
}
function CombinedProgressBar({
  percentage,
  canvasWidth,
  clockOptions,
  barOptions,
  textOptions,
}: CombinedProgressBarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <SemiCircularProgressBar
        {...barOptions}
        canvasWidth={canvasWidth}
        percentage={percentage}
        overflow="visible"
      />
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, 0%)",
          left: "50%",
          bottom: `${clockOptions?.positionY ?? 0}%`,
        }}
      >
        <SemiCircularProgressClock {...clockOptions} percentage={percentage} />
      </div>
      <span
        {...textOptions}
        style={{
          ...textOptions?.style,
          position: "absolute",
          bottom: `${textOptions?.positionY ?? 0}%`,
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      >
        {percentage}%
      </span>
    </div>
  );
}

export default CombinedProgressBar;
