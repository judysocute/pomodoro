// @flow
import React from 'react';
// import { toTimeString } from 'utils/time';

type Props = {
  passedTime: number,
  // passedTime: number,
  // tasks: number,
  task: Task,
  radius?: number, // 半徑
  strokeWidth?: number,
  fillColor?: string,
  strokeColor?: string,
  baseStrokeColor?: string,
}
function ProgressBar({
  passedTime,
  // tasks,
  radius = 100,
  strokeWidth = 5,
  fillColor = '#FF4343',
  strokeColor = '#890000',
  baseStrokeColor = '#F2F0C9',
  task,
}: Props) {
  const { totalSecond } = task;
  const svgSize = (radius * 2) + strokeWidth;
  const position = radius + strokeWidth / 2;
  const passedProgress = passedTime * (radius / totalSecond) * 3.14 * 2 + 1;
  const totalProgress = (totalSecond * (radius / totalSecond) * 3.14 * 2) + 1;

  return (
    <svg
      width={svgSize}
      height={svgSize}
      className="absolute top-0"
    >
      <circle
        fill={fillColor}
        cx={position}
        cy={position}
        r={radius}
        stroke={baseStrokeColor}
        strokeWidth={strokeWidth}
      />
      <circle
        transform={`rotate(-90 ${position} ${position})`}
        style={{ transition: 'stroke-dasharray .5s cubic-bezier(0, .5, .5, 1)' }}
        fill="transparent"
        cx={position}
        cy={position}
        r={radius}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${passedProgress}, ${totalProgress}`}
      />
      {/* <text
        x={position}
        y={position - (position / 3)}
        style={{
          fontSize: 24,
        }}
        fill={baseStrokeColor}
        textAnchor="middle"
        fontFamily="CenturyGothic, Arial, Helvetica, sans-serif"
      >
        {name}
      </text>
      <text
        x={position}
        y={position + 36}
        style={{
          fontSize: 72,
        }}
        fill={baseStrokeColor}
        textAnchor="middle"
        fontFamily="CenturyGothic, Arial, Helvetica, sans-serif"
      >
        {toTimeString(totalSecond - passedTime)}
      </text>
      <g className="a" transform={`translate(${position - 30}, ${position + 72})`}>
        <circle fill="none" cx="35" cy="35" r="30" stroke="#f2f0c9" opacity=".5" />
        <path x={position} d="M8,0l8,14H0Z" transform="translate(45, 25 ) rotate(90)" />
      </g> */}
    </svg>
  );
}
ProgressBar.defaultProps = {
  radius: 100,
  strokeWidth: 5,
  fillColor: '#FF4343',
  strokeColor: '#890000',
  baseStrokeColor: '#F2F0C9',
};
export default ProgressBar;
