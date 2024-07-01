import "./App.css";
import GeneralForm from "./components/GeneralForm";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div className="bg-image">
      <div className="container p-5">
        {/* <img src={bg} className=""></img> */}
        <GeneralForm />
      </div>
    </div>
  );
}

export default App;
