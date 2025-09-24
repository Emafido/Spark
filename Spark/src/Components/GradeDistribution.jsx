import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "A", value: 7 },
  { name: "B", value: 5 },
  { name: "C", value: 1 },
  { name: "D", value: 1 },
  { name: "E", value: 0 },
];

const COLORS = ["#4caf50", "#00c853", "#ff9800", "#f44336", "#9c27b0"];

const renderLegendText = (value, entry) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const percent = ((entry.payload.value / total) * 100).toFixed(0);
  return `${entry.payload.name}: ${percent}%`;
};

export default function GradeDistribution() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 className="my-4 mx-3 text-center font-extrabold text-xl">
        Grade Distribution
      </h3>
      <PieChart width={290} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="40%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          formatter={renderLegendText}
        />
      </PieChart>
    </div>
  );
}
