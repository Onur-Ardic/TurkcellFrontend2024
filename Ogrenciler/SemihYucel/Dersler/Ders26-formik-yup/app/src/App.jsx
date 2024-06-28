import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GeneralForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
