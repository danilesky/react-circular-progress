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
      {/* <SemiCircularProgressClock
        canvasWidth={400}
        rectangleOptions={{
          width: 4,
          height: 8,
          count: 27,
          colors: {
            fill: "gray",
            activeFill: "blue",
          },
        }}
        rangeType="closest"
        percentage={percentage}
      /> */}
      <SemiCircularProgressBar
        activeBar={{ color: "blue", offset: 10 }}
        backgroundBar={{ color: "grey" }}
        circle={{
          radius: 5,
          color: "white",
        }}
        canvasWidth={700}
        percentage={percentage}
      />
    </>
  );
}

export default Playground;
