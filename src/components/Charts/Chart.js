import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from 'recharts';
import getColor from '../../utils/Colors';

const type = "monotone";

const Chart = ({ data, state }) => {
  const times = data[0]['times'];
  const values = [];

  for (let i = 0; i < times.length; i++) {
    let dataLoad = {};
    dataLoad['time'] = times[i];
    data.forEach((d) => {
      dataLoad[d.metric] = d.values[i];
    });
    values.push(dataLoad);
  }

  return (
    <LineChart
      width={600}
      height={400}
      data={values}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Tooltip />
      <Legend />
      {data
        .filter(d => !state.includes(d.id))
        .map((d, i) => 
        <Line
          key={i}
          type={type} 
          dataKey={d.metric} 
          stroke={getColor(d.id)}
          dot={true}
          isAnimationActive={false} 
        />
      )
      }
      <XAxis 
        dataKey="time" 
      />
      <YAxis />
    </LineChart>
  )
}

export default Chart;