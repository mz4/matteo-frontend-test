import React, { useState, useCallback } from 'react';

const Callback = () => {
  const [count, setCount] = useState(0);

  const addAvocado = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <React.Fragment>
      <h2>This is to demonstrate useCallback</h2>
      <Addvocado add={addAvocado} />
      <div>{Array(count).fill('🥑').join(',')}</div>
    </React.Fragment>
  );
};

const Addvocado = React.memo(({ add }) => {
  console.log('component re-rendered');
  return <button onClick={add}>Add avocado</button>;
});

export default Callback;