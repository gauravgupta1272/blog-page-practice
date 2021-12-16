// import logo from './logo.svg';
import Navbar from "./Navbar";
import Home from "./Home"
function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  let random  = Math.random()*10000;
  var intvalue = Math.trunc( random );
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
