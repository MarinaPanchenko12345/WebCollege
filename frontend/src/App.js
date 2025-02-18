import Router from "./Router";
import "./App.css";
import Navbar from "./tags/Navbar";
import Header from "./tags/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <Navbar />
        <div className='content'>
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
