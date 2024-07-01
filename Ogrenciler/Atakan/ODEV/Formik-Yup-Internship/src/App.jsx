import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
import InternForm from "./components/Internship";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InternForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </div>
  );
}

export default App;
