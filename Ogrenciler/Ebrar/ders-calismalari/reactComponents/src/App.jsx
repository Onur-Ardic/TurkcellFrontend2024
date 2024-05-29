import "./App.css";
import { useEffect, useState } from "react";
import listItem from "../components/listItem";

function App() {
  const [value, setValue] = useState(0);
  const students = ["Varol", "Veli", "Ebrar", "Rümeysa", "Egemen"];
  useEffect(() => {
    console.log("Tiklandi");
  }, [value]);

  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <listItem student={student} key={index} value={value} />;
        })}
      </ul>
      <button onClick={() => setValue(value + 1)}>Tikla</button>
    </>
  );
}
export default App;
