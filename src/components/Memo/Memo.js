import { useState, useMemo } from 'react';

const computeLongest = (data) => {
  let longestCity = '';
  data.forEach(item => 
    {
      const citta = item.citta;
      if (citta.length > longestCity.length) {
        longestCity = citta;
      }
    })
  console.log('Calculate longest city');
  return longestCity;
}

const data = [{ citta: 'Frascati' }, { citta: 'Roma' }, { citta: 'Milano' }];

const Memo = () => {
  const [state, setState] = useState(0);
  const longestWord = useMemo(() => computeLongest(data), [data]);

  return (
    <>
      <span>Hello</span>
      <button onClick={ () => {setState(state+1)} }>Counter Memo: {state}</button>
      <div>Longest city: {longestWord}</div>
    </>
  )

}

export default Memo;