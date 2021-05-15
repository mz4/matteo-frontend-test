import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend
} from 'recharts';

const type = "monotone";

const Chart = ({ data }) => {
  const times = data[0]['times'];
  const values = [];

  for (let i = 0; i < times.length; i++) {
    let dataLoad = {};
    dataLoad['time'] = times[i];
    data.map((d) => {
      dataLoad[d.metric] = d.values[i];
    });
    values.push(dataLoad);
  }

  return (
    <LineChart
      width={500}
      height={400}
      data={values}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Legend />
      {data.map((d) => (
        <Line type={type} dataKey={d.metric} stroke="blue" dot={true} />
      ))}
      <XAxis dataKey="time" />
      <YAxis />
    </LineChart>
  )
}

export default Chart;