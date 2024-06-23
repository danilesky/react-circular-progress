import { ReactElement } from "react";

interface Rectangle {
  x: number;
  y: number;
  transform: string;
  fill: string;
  activeFill: string;
  percentage: number;
}

interface SemiCircularProgressClockProps {
  rangeType?: "range" | "closest";
  percentage: number;
  rectangleOptions: {
    width: number;
    height: number;
    count: number;
    colors?: {
      fill?: string;
      activeFill?: string;
    };
  };
  canvasWidth: number;
  overflow?: "hidden" | "visible";
}

function SemiCircularProgressClock({
  rangeType = "closest",
  percentage,
  canvasWidth,
  rectangleOptions,
  overflow,
}: SemiCircularProgressClockProps): ReactElement {
  const width = canvasWidth;
  const height = width / 2 + rectangleOptions.height;
  const radius = width / 2 - rectangleOptions.height / 2;
  const centerX = width / 2;
  const centerY = height;

  const rectangles: Array<Rectangle> = Array.from({
    length: rectangleOptions.count,
  }).map(function (_, i) {
    const angle = (i * 180) / (rectangleOptions.count - 1) - 90;

    const position = polarToCartesian(centerX, centerY, radius, angle);

    return {
      x: position.x - rectangleOptions.width / 2,
      y: position.y - rectangleOptions.height / 2,
      transform: `rotate(${angle},${position.x},${position.y})`,
      fill: rectangleOptions.colors?.fill ?? "gray",
      activeFill: rectangleOptions.colors?.activeFill ?? "red",
      percentage: Math.floor((i / rectangleOptions.count) * 100),
    };
  });

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angle: number
  ) {
    const radians = ((angle - 90) * Math.PI) / 180;

    return {
      x: radius * Math.cos(radians) + centerX,
      y: radius * Math.sin(radians) + centerY,
    };
  }

  function isActiveClosestRectangle(
    percentage: number,
    currentRectanglePercentage: number
  ) {
    if (percentage === 0) {
      return false;
    }

    if (
      rectangles[rectangles.length - 1].percentage ===
      currentRectanglePercentage
    ) {
      if (percentage >= 100) {
        return true;
      }
    }

    let closestNumber = null;

    const checkArray = rectangles.map(function (rect) {
      return rect.percentage;
    });

    for (let i = 0; i < checkArray.length - 1; i++) {
      if (checkArray[i] < percentage) {
        closestNumber = checkArray[i];
      }
    }

    if (closestNumber === currentRectanglePercentage && percentage < 100) {
      return true;
    }

    return false;
  }

  function isActiveInRangeRectangle(
    percentage: number,
    currentRectanglePercentage: number
  ) {
    if (percentage === 0) {
      return false;
    }
    if (
      rectangles[rectangles.length - 1].percentage ===
      currentRectanglePercentage
    ) {
      if (percentage >= 100) {
        return true;
      }
      return false;
    }

    return Math.floor(percentage) >= currentRectanglePercentage;
  }

  function fillByRangeType(rect: Rectangle) {
    if (rangeType === "range") {
      return isActiveInRangeRectangle(percentage, rect.percentage)
        ? rect.activeFill
        : rect.fill;
    }
    return isActiveClosestRectangle(percentage, rect.percentage)
      ? rect.activeFill
      : rect.fill;
  }

  return (
    <svg width={width} height={height} overflow={overflow}>
      {rectangles.map(function (rect, index) {
        return (
          <rect
            key={index}
            x={rect.x}
            y={rect.y}
            width={rectangleOptions.width}
            height={rectangleOptions.height}
            transform={rect.transform}
            style={{
              fill: fillByRangeType(rect),
            }}
          />
        );
      })}
    </svg>
  );
}

export default SemiCircularProgressClock;
