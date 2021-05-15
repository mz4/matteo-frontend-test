import { LineChart, Line, XAxis, YAxis } from 'recharts';

const type = "monotone";
const data = [];

for (let i = 0; i < 7; i++) {
  const time = 20 + i;
  const valueA = Math.random() * 100;
  const valueB = Math.random() * 40;
  const valueC = Math.random() * 80;
  let d = {
    time: time,
    valueA: valueA,
    valueB: valueB,
    valueC: valueC
  };

  data.push(d);
}

const Chart = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type={type} dataKey="valueA" stroke="blue" dot={true} />
      <Line type={type} dataKey="valueB" stroke="red" dot={true} />
      <Line type={type} dataKey="valueC" stroke="yellow" dot={true} />
      <XAxis dataKey="time" />
      <YAxis />
    </LineChart>
  )
}

export default Chart;