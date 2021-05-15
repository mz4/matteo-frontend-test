const Metrics = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Metrics
            </th>
            <th>
                Value
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) =>
          (
            <tr key={i}>
              <td>{m.metric}</td>
              <td>{m.values.slice(-1)}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </>
  )
}

export default Metrics;