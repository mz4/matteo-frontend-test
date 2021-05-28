import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Subex from "./Subex";
import ThemeContext from '../../context/Context';

const Excercise = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const context = useContext(ThemeContext);

  console.log('Context: ', JSON.stringify(context));

  useEffect(() => {
    const getData = () => {
      axios
        .get('users.json')
        .then((response) => {
        setData(response.data);
      }).catch(error => {
        console.log('error', error);
     });
    }
    getData();
  }, [])

  const clearCounter = () => {
    setCount(0);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>
      <div>
        {data.map((m, i) =>
        (
          <div key={i}>{m.city}</div>
        )
        )}
      </div>
      <div>
        <Subex 
          clearCounter={clearCounter}
        />
      </div>
      {count === 0 ? 
        <div>count is 0</div> : 
        <div>
          count is more than 0
          <button onClick={() => {context.setLogin()}} > 
            Call Context setLogin 
          </button>
          <button onClick={() => {context.setLogout()}} > 
            Call Context setLogout 
          </button>
        </div>
      }
    </div>
  )}

export default Excercise;