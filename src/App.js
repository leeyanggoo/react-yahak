import { useState } from "react";
import "./App.css";

function Counter(props) {
  let countState = useState(props.initValue);
  let count = countState[0];
  let setCount = countState[1];

  function up() {
    console.log(1);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={up}>+</button> {count}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter title="손님 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
