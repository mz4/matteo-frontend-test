import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Metrics from './components/Metrics/Metrics';
import Chart from './components/Charts/Chart';
import reducer from './reducer/Reducer'
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
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
      <h2>TK1 Metrics</h2>
      {data.length > 0 ?
        <div className="Container">
          <div className="Metrics">
            <Metrics
              data={data}
              state={state}
              dispatch={dispatch}
            />
          </div>
          <div className="Chart">
            <Chart 
              data={data}
              state={state}
            />
          </div>
        </div> : 
        <div>
          Loading... 
        </div>
      }
    </div>
  );
}

export default App;
