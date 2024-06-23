import { ReactElement, SVGProps } from "react";

interface SemiCircularProgressBarProps {
  canvasWidth: number;
  percentage: number;
  barWidth?: number;
  backgroundBarStyle?: {
    color?: string;
    variant?: SVGProps<SVGSVGElement>["strokeLinecap"];
  };
  activeBarStyle?: {
    offset?: number;
    color?: string;
    variant?: SVGProps<SVGSVGElement>["strokeLinecap"];
  };
}

export function SemiCircularProgressBar({
  canvasWidth,
  percentage,
  barWidth,
  activeBarStyle,
  backgroundBarStyle,
}: SemiCircularProgressBarProps): ReactElement {
  const strokeWidth = barWidth ?? 30;
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

  const activeBarStrokeWidth = activeBarStyle?.offset
    ? strokeWidth - activeBarStyle.offset
    : strokeWidth;
  const circleRadius = activeBarStrokeWidth / 2;

  function percentageToOffset(percentage: number) {
    let percentual = percentage;
    if (percentual < 0) {
      percentual = 0;
    }
    if (percentual > 100) {
      percentual = 100;
    }
    return circumference - (percentual / 100) * circumference;
  }

  function getCircleCoordinates() {
    const angle = (percentage / 100) * 180;
    const radian = (angle * Math.PI) / 180;

    const circleX = radius * Math.cos(radian - Math.PI) + width / 2;
    const circleY = radius * Math.sin(radian - Math.PI) + height;

    return {
      x: circleX,
      y: circleY - circleRadius,
    };
  }

  return (
    <svg width={width} height={height}>
      <path
        d={`
          ${drawing.MOVE} 
          ${drawing.arc}
        `}
        style={{
          transition: "stroke-dashoffset 0.3s",
          stroke: backgroundBarStyle?.color ?? "#000000",
          strokeLinecap: backgroundBarStyle?.variant ?? "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${percentageToOffset(100)}`,
          strokeWidth: `${strokeWidth}`,
        }}
        fill="none"
      />
      <path
        d={`
          ${drawing.MOVE} 
          ${drawing.arc}
        `}
        style={{
          transition: "stroke-dashoffset 0.3s",
          stroke: activeBarStyle?.color ?? "#000000",
          strokeLinecap: activeBarStyle?.variant ?? "round",
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${percentageToOffset(percentage)}`,
          strokeWidth: `${activeBarStrokeWidth}`,
        }}
        fill="none"
      />
      <circle
        cx={getCircleCoordinates().x}
        cy={getCircleCoordinates().y}
        r={circleRadius}
        fill="red"
      />
    </svg>
  );
}
