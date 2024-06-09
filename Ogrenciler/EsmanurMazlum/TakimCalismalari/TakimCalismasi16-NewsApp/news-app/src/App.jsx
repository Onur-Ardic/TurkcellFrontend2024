import './App.css'
import Navbar from './components/Navbar';
import Router from './routes/Router';


function App() {

  // const getNews = async () => {
  //   await Requests.get("https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=223d61cd6e5a43d683afc6f5405454d3")
  //     .then(data => console.log(data)).catch(err => console.log(err));
  // }

  return (
    <>
      <Navbar/>
      <Router/>
    </>
  )
}

export default App
