import { SemiCircularProgressBar } from "../semi-circular-progress-bar";
import SemiCircularProgressClock from "../semi-circular-progress-clock";

interface CombinedProgressBarProps {
  percentage: number;
  canvasWidth: number;
}
function CombinedProgressBar({
  percentage,
  canvasWidth,
}: CombinedProgressBarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <SemiCircularProgressBar
        barWidth={30}
        activeBar={{
          color: "#246CF9",
        }}
        backgroundBar={{
          color: "#3C4254",
          shadow: "0px 0px 15px #246CF9",
        }}
        circle={{
          radius: 5,
          color: "white",
        }}
        canvasWidth={canvasWidth}
        percentage={percentage}
        overflow="visible"
      />
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, 0)",
          left: "50%",
          bottom: "0",
        }}
      >
        <SemiCircularProgressClock
          canvasWidth={canvasWidth / 1.6}
          rectangleOptions={{
            width: 2,
            height: 4,
            count: 27,
            colors: {
              fill: "#3C4254",
              activeFill: "#FFFFFF",
            },
          }}
          rangeType="closest"
          percentage={percentage}
        />
      </div>
    </div>
  );
}

export default CombinedProgressBar;
