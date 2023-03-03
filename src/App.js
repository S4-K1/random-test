import './App.css';
import React from 'react';

function App() {
  // const diceArray = Array(10).fill(Array(20).fill(0));
  const diceArray = Array(20).fill(0);

  // const addDice = (column, roll) => {
  // diceArray[column][roll] = diceArray[column][roll] + 1;
  // };

  const addDice = (roll) => {
    diceArray[roll] = diceArray[roll] + 1;
  };

  const rollTheDiceThousand = () => {
    // for (let column = 0; column < 10; column++) {
    for (let i = 0; i < 1000; i++) {
      // addDice(column, Math.floor(Math.random() * 20));
      addDice(Math.floor(Math.random() * 20));
      // }
    }

    console.log({ diceArray });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => rollTheDiceThousand()}>roll</button>
      </header>
    </div>
  );
}

export default App;
