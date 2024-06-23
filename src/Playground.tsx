import { useState } from "react";
import CombinedProgressBar from "./components/variants/combined-progress-bar";

function Playground() {
  const [percentage, setPercentage] = useState(0);
  return (
    <>
      <input
        type="range"
        name="percentage"
        id="percentage"
        onChange={(e) => setPercentage(Number(e.target.value))}
        min="0"
        max="100"
      />
      <CombinedProgressBar
        percentage={percentage}
        canvasWidth={120}
        barOptions={{
          barWidth: 12,
          activeBar: {
            color: "#246CF9",
          },
          backgroundBar: {
            color: "#3C4254",
            shadow: "0px 0px 15px #246CF9",
          },
          circle: {
            radius: 2,
            color: "white",
            hidable: true,
          },
        }}
        clockOptions={{
          rectangleOptions: {
            width: 1,
            height: 2,
            count: 27,
            colors: {
              fill: "#3C4254",
              activeFill: "#FFFFFF",
            },
          },
          positionY: 7,
          canvasWidth: 120 / 1.38,
          rangeType: "closest",
        }}
      />
    </>
  );
}

export default Playground;
