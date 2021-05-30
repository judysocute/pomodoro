// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  position: number,
  fill: string,
  children: Node,
}

function TimeText({ position, fill, children }: Props) {
  return (
    <text
      x={position}
      y={position + 36}
      style={{
        fontSize: 72,
      }}
      fill={fill}
      textAnchor="middle"
      fontFamily="CenturyGothic, Arial, Helvetica, sans-serif"
    >
      {children}
    </text>
  );
}

export default TimeText;
