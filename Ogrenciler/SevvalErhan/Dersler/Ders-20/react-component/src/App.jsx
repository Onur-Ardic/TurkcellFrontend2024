import { useEffect } from 'react';
import './App.css';
import ListItem from './ListItem';

function App() {
  // const [value, setValue] = useState(null);
  const students = ["Varol", "Veli", "RümeysaNur", "Egemen"];
  useEffect(() => {
   console.log("Tıklandı");
  }, [value]);

  return (
   <>
    <ul>
      {students.map((student, index) => (
        return <ListItem student={student} key={index} value={value}/>;
      ))}
      <button onClick={setValue(value+1) }>Tıkla</button>
    </ul>
   </>
  );
}

export default App;
