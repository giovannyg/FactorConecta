import React, {useState} from 'react';
import './CounterButton.css';

function CounterButton() {
  const [n, setN] = useState(0);

  function increment()
  {
    setN(n+1);
  }

   return (<div className="CounterButton">
    <h4>{n}</h4>
    <button id="counterButton" onClick={increment}>Count</button>
  </div>);
};

CounterButton.propTypes = {};

CounterButton.defaultProps = {};

export default CounterButton;
