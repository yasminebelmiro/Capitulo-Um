import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Category from "./Pages/Category"

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/cadastro" element={< Register/>} />
        <Route path="/categorias" element={< Category/>} />
      </Routes>
    </Router>
  );
}

export default App;
