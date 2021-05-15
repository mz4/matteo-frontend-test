import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Metrics from './components/Metrics/Metrics';
import Chart from './components/Charts/Chart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      const result = await axios(
        'http://localhost:3001/api',
      );
      setData(result.data);
    };
    dataLoad();
  }, [])

  return (
    <div className="App">
      <div>Metrics Data</div>
      {data.length > 0 ?
        <div>
          <Metrics
            data = {data}
          />
          <Chart 
            data = {data}
          />
        </div> : 
        <div>
          Loading... 
        </div>
      }
    </div>
  );
}

export default App;
