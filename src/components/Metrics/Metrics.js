import { useState } from 'react';
import metricsData from '../../utils/Metrics';

const Metrics = () => {
  const [data, setData] = useState(metricsData);
  return (
    <>
      <table>
        <tr>
          <th>
            Metrics
          </th>
          <th>
            Value
          </th>
        </tr>
        <tbody>
          {data.map((m) => 
            (
              <tr>
                <td>{m.Metric}</td>
                <td>{m.Values.slice(-1)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

export default Metrics;