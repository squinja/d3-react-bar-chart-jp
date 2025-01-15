import { ScaleLinear } from "d3";

type YAxisProps = {
  yScale: ScaleLinear<number, number>;
  innerWidth: number;
  innerHeight: number;
  tickSize?: number;
};

export const YAxis = ({
  yScale,
  innerWidth,
  innerHeight,
  tickSize = 6,
}: YAxisProps) => {
  const ticks = yScale.ticks(tickSize);
  console.log("ticks", ticks);
  return (
    <g>
      <line
        x1={0}
        x2={0}
        y1={0}
        y2={innerHeight}
        stroke="lightgray"
        strokeWidth={1}
      ></line>

      {ticks.map((tick, index) => {
        const y = yScale(tick);

        return (
          <g key={index}>
            <line
              x1={0}
              x2={innerWidth}
              y1={innerHeight - y}
              y2={innerHeight - y}
              stroke="gray"
              strokeWidth={1}
            />
            <text
              x={-10}
              y={innerHeight - y}
              textAnchor="end"
              fontSize={12}
              fill="lightgray"
            >
              {tick}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export default YAxis;
