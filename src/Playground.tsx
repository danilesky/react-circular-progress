import SemiCircularProgressClock from "./components/semi-circular-progress-clock";

function Playground() {
  return (
    <>
      <SemiCircularProgressClock
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
        percentage={90}
      />
    </>
  );
}

export default Playground;
