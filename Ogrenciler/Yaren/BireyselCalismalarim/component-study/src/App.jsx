import { useState } from "react";

import "./App.css";
import Greetingprop from "./components/Greetingprop";
import Greetingstate from "./components/Greetingstate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greetingprop name="Yaren" />
      {/* Greetingprop bileşenine props olarak name geçiyoruz */}
      <div>
        <h1>State part:</h1>
        <Greetingstate /> {/* Greetingstate bileşeni kullanılıyor */}
      </div>
    </>
  );
}

export default App;

// props kullanmak zorunda kalınan örnek:

// Parent Component
// const App = () => {
//   const names = ["Alice", "Bob", "Charlie"];

//   return (
//     <div>
//       {names.map((name, index) => (
//         <Greeting key={index} name={name} />
//       ))}
//     </div>
//   );
// };

// // Child Component
// const Greeting = (props) => {
//   return <h1>Hello, {props.name}!</h1>;
// };

// export default App;
