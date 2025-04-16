import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksData = use(marksPromise);
  const { data, statusText } = marksData;
  console.log(statusText);
  const students = data.map((d) => {
    const student = {
      id: d.student_id,
      name: d.name,
      physics: d.marks.physics,
      chemistry: d.marks.chemistry,
      math: d.marks.math,
    };
    const avg = (student.chemistry + student.math + student.physics) / 3;
    student.avg = parseFloat(avg.toFixed(2));
    return student;
  });

  return (
    <div className="py-16 h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
      <BarChart width={600} height={300} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Bar dataKey={"chemistry"} fill="lightblue"
        activeBar={<Rectangle fill='pink' stroke="red"></Rectangle>}
        ></Bar>
        <Bar
          dataKey={"physics"}
          fill="skyblue"
          activeBar={<Rectangle fill="pink" stroke="red"></Rectangle>}
        ></Bar>
        <Bar
          dataKey={"math"}
          fill="lightgreen"
          activeBar={<Rectangle fill="pink" stroke="red"></Rectangle>}
        ></Bar>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksChart;
