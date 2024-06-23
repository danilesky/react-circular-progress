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

      <CombinedProgressBar percentage={percentage} canvasWidth={200} />
    </>
  );
}

export default Playground;
