import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Metrics from './components/Metrics/Metrics';
import Chart from './components/Charts/Chart';
import Excercise from "./components/Excercise/Excercise";
import Memo from "./components/Memo/Memo";
import Callback from "./components/Callback/Callback";
import reducer from './reducer/Reducer';
import './Postapp.css';

const Postapp = () => {
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
      <br></br>
      <Callback />
      <br></br>
      <Memo />
      {data.length > 0 ?
        <>
          <div className="Container">
            <div>
              <Excercise />
            </div>
          </div>
        </> : <div>B</div>
      }
      {data.length > 0 ?
      <>
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
      </> : 
        <div>A</div>
      }
    </div>
  );
}

export default Postapp;
