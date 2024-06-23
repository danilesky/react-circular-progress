import { ReactElement, SVGProps } from "react";

interface ActivebarProps {
  offset?: number;
  color?: string;
  variant?: SVGProps<SVGSVGElement>["strokeLinecap"];
}

interface CircleProps {
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  radius?: number;
}

interface BackroundBarProps {
  color?: string;
  variant?: SVGProps<SVGSVGElement>["strokeLinecap"];
}

interface SemiCircularProgressBarProps {
  canvasWidth: number;
  percentage: number;
  barWidth?: number;
  backgroundBar?: BackroundBarProps;
  activeBar?: ActivebarProps;
  circle?: CircleProps;
}

export function SemiCircularProgressBar({
  canvasWidth,
  percentage,
  barWidth,
  activeBar,
  backgroundBar,
  circle,
}: SemiCircularProgressBarProps): ReactElement {
  const strokeWidth = barWidth ?? 30;
  const halfStrokeWidth = strokeWidth / 2;

  const width = canvasWidth;
  const height = width / 2 + halfStrokeWidth;

  const radius = width / 2 - halfStrokeWidth;
  // Half circumference
  const circumference = Math.PI * radius;

  const drawing = {
    // Move position - x, y (from right left corner)
    MOVETO: `M ${halfStrokeWidth} ${height - halfStrokeWidth}`,
    // Make arc - radiiX, radiiY (polomery) , rotateX , clockwise , endpointX, endpointY
    arc: `a 1 1 0 0 1 ${width - strokeWidth} 0`,
  };

  const activeBarStrokeWidth = activeBar?.offset
    ? strokeWidth - activeBar.offset
    : strokeWidth;

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

  /**
   * Circle
   */
  const circleRadius = circle?.radius ?? strokeWidth / 2;
  const circleCoordinates = getCircleCoordinates();

  function getCircleCoordinates() {
    const angle = (percentage / 100) * 180;
    const radian = (angle * Math.PI) / 180;

    const circleX = width / 2 + radius * Math.cos(radian - Math.PI);
    const circleY =
      height - halfStrokeWidth + radius * Math.sin(radian - Math.PI);

    return {
      x: circleX,
      y: circleY,
    };
  }

  return (
    <svg width={width} height={height}>
      {backgroundBar && (
        <path
          d={`
          ${drawing.MOVETO} 
          ${drawing.arc}
        `}
          style={{
            stroke: backgroundBar?.color ?? "#000000",
            strokeLinecap: backgroundBar?.variant ?? "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${percentageToOffset(100)}`,
            strokeWidth: `${strokeWidth}`,
          }}
          fill="none"
        />
      )}
      {activeBar && (
        <path
          d={`
          ${drawing.MOVETO} 
          ${drawing.arc}
        `}
          style={{
            stroke: activeBar?.color ?? "#000000",
            strokeLinecap: activeBar?.variant ?? "round",
            strokeDasharray: `${circumference}`,
            strokeDashoffset: `${percentageToOffset(percentage)}`,
            strokeWidth: `${activeBarStrokeWidth}`,
          }}
          fill="none"
        />
      )}
      {circle && (
        <circle
          cx={circleCoordinates.x}
          cy={circleCoordinates.y}
          r={circleRadius}
          fill={circle?.color}
          style={{
            stroke: circle?.borderColor,
            strokeWidth: circle?.borderWidth,
          }}
        />
      )}
    </svg>
  );
}
