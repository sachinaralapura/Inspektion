import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import "./app.css"


function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;

// const initialCount: number = 0;
// function reducer(state: number, action: string) {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 0;
//     default:
//       return state;
//   }

// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialCount);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch("increment")}>Increment </button>
//       <button onClick={() => dispatch("decrement")}>decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   )
// }

