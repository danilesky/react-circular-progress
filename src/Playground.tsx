import { CSSProperties, ReactElement, useState } from "react";
import CombinedProgressBar from "./components/variants/combined-progress-bar";
import SemiCircularProgressBar from "./components/semi-circular-progress-bar";
import SemiCircularProgressClock from "./components/semi-circular-progress-clock";

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
      <div style={styles.boxWrapper}>
        {previewColors.map((color) => (
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
        ))}
      </div>
      <div style={styles.boxWrapper}>
        {previewColors.map((color) => (
          <SemiCircularProgressBar
            canvasWidth={120}
            percentage={percentage}
            barWidth={20}
            activeBar={{
              color: color,
            }}
            backgroundBar={{
              color: "#3C4254",
            }}
            circle={{
              radius: 5,
              color: "white",
            }}
          />
        ))}
      </div>
      <div style={styles.boxWrapper}>
        {previewColors.map((color) => (
          <SemiCircularProgressClock
            canvasWidth={120}
            percentage={percentage}
            rangeType={"range"}
            rectangleOptions={{
              width: 3,
              height: 10,
              count: 27,
              colors: {
                fill: "#3C4254",
                activeFill: color,
              },
            }}
            overflow="visible"
          />
        ))}
      </div>
      <div style={styles.boxWrapper}>
        {previewColors.map((color) => (
          <SemiCircularProgressClock
            canvasWidth={120}
            percentage={percentage}
            rangeType={"closest"}
            rectangleOptions={{
              width: 2,
              height: 10,
              count: 21,
              colors: {
                fill: "#3C4254",
                activeFill: color,
              },
            }}
            overflow="visible"
          />
        ))}
      </div>
    </>
  );
}

const styles: { [key: string]: CSSProperties } = {
  boxWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
};

export default Playground;
