import './App.css';
import Landing from './components/pages/Landing/Landing';
import Login from './components/pages/Login/Login.jsx';
import Regpage from './components/pages/Regpage/Regpage.jsx';
import { BrowserRouter as BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Regpage" element={<Regpage />} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;
