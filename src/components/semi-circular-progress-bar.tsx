import { ReactElement } from "react";

interface SemiCircularProgressBarProps {
  canvasWidth: number;
}

export function SemiCircularProgressBar({
  canvasWidth,
}: SemiCircularProgressBarProps): ReactElement {
  const strokeWidth = 30;

  const width = canvasWidth;
  const height = width / 2 + strokeWidth / 2;

  const radius = width / 2 - strokeWidth / 2;

  // Half circle circumference
  const circumference = Math.PI * radius;

  const drawing = {
    // Move position - x, y (from right left corner)
    MOVE: `M ${strokeWidth / 2} ${height - strokeWidth / 2}`,
    // Make arc - radiiX, radiiY (polomery) , rotateX , clockwise , endpointX, endpointY
    arc: `a 1 1 0 0 1 ${width - strokeWidth} 0`,
  };

  return (
    <svg width={width} height={height}>
      <path
        d={`${drawing.MOVE} ${drawing.arc}`}
        style={{
          transition: "stroke-dashoffset 0.35s",
          stroke: "#04001b",
          strokeLinecap: "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${circumference - 1 * circumference}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />
    </svg>
  );
}
