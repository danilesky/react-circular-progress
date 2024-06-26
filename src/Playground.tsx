import { ReactElement, useState } from "react";
import CombinedProgressBar from "./components/variants/combined-progress-bar";

function Playground(): ReactElement {
  const [percentage, setPercentage] = useState<number>(0);

  const previewColors: Array<string> = ["#246CF9", "#30E0A1", "#FA2256"];

  function percentageHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setPercentage(Number(e.target.value));
  }

  return (
    <>
      <input
        type="range"
        name="percentage"
        id="percentage"
        onChange={percentageHandler}
        value={percentage}
        min="0"
        max="100"
      />
      {previewColors.map((color) => {
        return (
          <CombinedProgressBar
            percentage={percentage}
            canvasWidth={120}
            barOptions={{
              barWidth: 12,
              activeBar: {
                color: color,
              },
              backgroundBar: {
                color: "#3C4254",
                shadow: `0px 0px 15px ${color}`,
              },
              circle: {
                radius: 2,
                color: "white",
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
                color: color,
                fontSize: 14,
                fontWeight: 500,
              },
            }}
          />
        );
      })}
    </>
  );
}

export default Playground;
