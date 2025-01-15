import * as d3 from "d3";
import XAxis, { YAxis } from "./YAxis";

export default function Home() {
  const data = [
    { name: "宮崎", score: 36 },
    { name: "青木", score: 68 },
    { name: "川端", score: 72 },
    { name: "武雄", score: 87 },
    { name: "清水", score: 84 },
  ];

  const width = 800;
  const height = 400;
  const margin = { top: 60, right: 30, bottom: 60, left: 60 };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3.scaleLinear().domain([0, 100]).range([0, innerHeight]);

  return (
    <div>
      <main>
        <svg width={width} height={height}>
          <text
            x={innerWidth / 2 + 30}
            y={25}
            textAnchor="middle"
            fontSize={24}
            fill="white"
          >
            生徒たちのテストスコア
          </text>
          <g
            transform={`translate(${margin.left}, ${margin.top})`}
            width={innerWidth}
            height={innerHeight}
          >
            <YAxis
              yScale={yScale}
              innerHeight={innerHeight}
              innerWidth={innerWidth}
            />
            {data.map((d, i) => (
              <g key={i}>
                <rect
                  x={xScale(d.name)}
                  y={innerHeight - yScale(d.score)}
                  fill="cornflowerblue"
                  width={xScale.bandwidth()}
                  height={yScale(d.score)}
                  stroke="lightblue"
                  strokeWidth={1.5}
                  role="tooltip"
                />
                <text
                  x={xScale(d.name) + xScale.bandwidth() / 2}
                  y={innerHeight + 40}
                  textAnchor="middle"
                  fontSize={24}
                  fill="white"
                >
                  {d.name}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </main>
    </div>
  );
}
