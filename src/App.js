import Home from './components/pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
function App() {
  return (
    <div>
      <Router>
      
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        </Routes>
      </Router>
    </div>
    
  );
  
}

export default App;
