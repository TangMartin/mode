import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

const data = [
  { name: "January", Total: 10 },
  { name: "February", Total: 21 },
  { name: "March", Total: 7 },
  { name: "April", Total: 14 },
  { name: "May", Total: 9 },
  { name: "June", Total: 19 },
  { name: "July", Total: 9 },
  { name: "August", Total: 26 },
];

export const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Impact </div>
      <ResponsiveContainer width="98%" aspect={2 / 0.9}>
        <AreaChart
          width={500}
          height={180}
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
