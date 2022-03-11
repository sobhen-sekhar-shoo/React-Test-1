import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import User from './components/User';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
   <>
    <Navbar/>
    <Routes>
          <Route path="/about" element={<About titel="test" />}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
   </>
   </Router>
  );
}

export default App;
