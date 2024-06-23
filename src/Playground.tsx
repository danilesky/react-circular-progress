import { useState } from "react";
import SemiCircularProgressClock from "./components/semi-circular-progress-clock";
import { SemiCircularProgressBar } from "./components/semi-circular-progress-bar";

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
      <SemiCircularProgressClock
        canvasWidth={400}
        rectangleOptions={{
          width: 4,
          height: 8,
          count: 40,
          colors: {
            fill: "gray",
            activeFill: "blue",
          },
        }}
        rangeType="closest"
        percentage={percentage}
      />
      <SemiCircularProgressBar
        barWidth={40}
        activeBar={{
          color: "#246CF9",
        }}
        canvasWidth={200}
        percentage={percentage}
        overflow="visible"
      />
    </>
  );
}

export default Playground;
