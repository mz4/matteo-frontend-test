import './App.css';
import Metrics from './components/Metrics/Metrics';
import Chart from './components/Charts/Chart';

const App = () => {
  return (
    <div className="App">
      <Metrics/>
      <Chart/>
    </div>
  );
}

export default App;
