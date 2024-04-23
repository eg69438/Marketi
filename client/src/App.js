import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import CreateProduct from './pages/CreateProduct';


function App() {
  return (
    <div className='App'>
      <Router>
        <Link to="/CreateProduct"> Create a Product</Link>
        <Link to="/">Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
