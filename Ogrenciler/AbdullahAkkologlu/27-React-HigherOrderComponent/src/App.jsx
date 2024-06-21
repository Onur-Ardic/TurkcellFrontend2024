import UserList from "./components/UserList";
import DataFetchingHOC from "./hoc/DataFetchingHOC";
import "./App.css";
const url = "https://api.github.com/users";

const EnhancedUserList = DataFetchingHOC(UserList, url);

function App() {
  return (
    <div className="App">
      <h1>GitHub User List</h1>
      <EnhancedUserList />
    </div>
  );
}

export default App;
