import getColor from '../../utils/Colors';
import './Metrics.css';

const Metrics = ({ dispatch, data, state }) => {
  return (
    <>
      <table id="sensors">
        <thead>
          <tr>
            <th>
              Metrics
            </th>
            <th>
              Value
            </th>
            <th>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) =>
          (
            <tr key={i}>
              <td>
                <span 
                  style={{color: getColor(m.id)}} 
                  className={state.includes(m.id) ? "disabled" : "enabled"}
                  >
                    {m.metric}
                </span>
              </td>
              <td>{m.values.slice(-1)}</td>
              <td>
                {state.includes(m.id) ? 
                  <button onClick={(e) => dispatch({ type: "ENABLE", id: m.id })}>Enable</button> : 
                  <button onClick={(e) => dispatch({ type: "DISABLE", id: m.id })}>Disable</button>
                }
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </>
  )
}

export default Metrics;