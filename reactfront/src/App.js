// import logo from './logo.svg';
import './App.css';

//importamos componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlogs'; 
// import CompCreateBlo from './blog/por';
import CompTabla from './blog/tabla'
import  Comppsicologo from './blog/psicologos'
import  CompVale from './blog/validator'
import CopiaaPrueba from './blog/Validator2'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<CompShowBlogs />}/>
        <Route path='/create'element={<CompCreateBlog />}/>
        {/* <Route path='/si'element={<CompCreateBlo />}/> */}
        <Route exact path='/tablita' element={<CompTabla/>}/>
        <Route exact path='/psicologo' element={< Comppsicologo/>}/>
        <Route exact path='/validator' element={<  CompVale/>}/>
        
        <Route exact path='/validator2' element={<CopiaaPrueba/>}/>
        
      </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
