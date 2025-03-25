import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Panel from './pages/panel';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Panel" element={<Panel/>}/>
    </Routes>
  );
}

export default App;
