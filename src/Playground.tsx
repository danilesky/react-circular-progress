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
        textOptions={{
          positionY: 20,
          style: {
            color: "#246CF9",
            fontSize: 14,
            fontWeight: 500,
          },
        }}
      />
      <CombinedProgressBar
        percentage={percentage}
        canvasWidth={120}
        barOptions={{
          barWidth: 12,
          activeBar: {
            color: "#30E0A1",
          },
          backgroundBar: {
            color: "#3C4254",
            shadow: "0px 0px 15px #30E0A1",
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
        textOptions={{
          positionY: 20,
          style: {
            color: "#30E0A1",
            fontSize: 14,
            fontWeight: 500,
          },
        }}
      />
      <CombinedProgressBar
        percentage={percentage}
        canvasWidth={120}
        barOptions={{
          barWidth: 12,
          activeBar: {
            color: "#FA2256",
          },
          backgroundBar: {
            color: "#3C4254",
            shadow: "0px 0px 15px #FA2256",
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
              fill: "#FA2256",
              activeFill: "#FFFFFF",
            },
          },
          positionY: 7,
          canvasWidth: 120 / 1.38,
          rangeType: "closest",
        }}
        textOptions={{
          positionY: 20,
          style: {
            color: "#FA2256",
            fontSize: 14,
            fontWeight: 500,
          },
        }}
      />
    </>
  );
}

export default Playground;
