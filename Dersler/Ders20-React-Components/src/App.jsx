import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";
import styles from "./CustomStyle.module.css";

function App() {
  const [value, setValue] = useState(0);
  const students = ["Varol", "Veli", "Rümeysanur", "Egemen"];
  useEffect(() => {
    console.log("Tıklandı");
  }, [value]);
  return (
    <>
      <ul>
        {students.map((student, index) => {
          return <ListItem student={student} key={index} value={value} />;
        })}
        <button
          className={styles.customButton}
          onClick={() => setValue(value + 1)}
        >
          Tıkla
        </button>
      </ul>
    </>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [sayac, setSayac] = useState(0);
//   useEffect(() => {
//     console.log("Mount useEffect çalıştı");
//   }, []); // []: sadece mount olduğunda çalışır
//   useEffect(() => {
//     console.log("didUpdate useEffect çalıştı");
//   }); // didUpdate: herhangi bir state değiştiğinde çalışır
//   useEffect(() => {
//     console.log("stateUpdate useEffect çalıştı");
//   }, [sayac]); // didUpdate: sayac state değiştiğinde çalışır
//   useEffect(() => {
//     return () => {
//       console.log("Unmount useEffect çalıştı");
//     };
//   }, []); // []: sadece unmount olduğunda çalışır
//   return (
//     <>
//       <h1 onClick={() => setSayac(sayac + 1)}>useEffect</h1>
//     </>
//   );
// }

// export default App;
