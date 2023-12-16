import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Services from './components/services';
import { Route, Routes } from "react-router-dom";
import Gallery from './components/gallery';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='Services' element={<Services/>}/>
<Route path='Gallery' element={<Gallery/>}/>

{/* <Route path='/' element={<Home/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/' element={<Home/>}/> */}


</Routes>

      </div>
  );
}

export default App;
