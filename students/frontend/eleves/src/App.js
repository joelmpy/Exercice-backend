import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Add from './component/Add';
import Navbar from './component/Navbar';
import Validation from './component/Validation';


function App() {

  return (
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='Validation' element={<Validation/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
