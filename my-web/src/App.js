import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Nav/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
// import ViewItem from './pages/ViewItem';
// import Viewitems from './pages/Viewitems';
import Item from './pages/Item';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Additem' element={<AddItem/>}></Route>
      {/* <Route path='/ViewItem' element={<ViewItem/>}></Route> */}
      {/* <Route path='/ViewItems' element={<Viewitems/>}></Route> */}
      <Route path='/Item' element={<Item/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
