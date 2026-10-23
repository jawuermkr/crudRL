import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MostrarUsuario from './components/MostrarUsuario';
import EditarUsuario from './components/EditarUsuario';
import CrearUsuario from './components/CrearUsuario';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2>CRUD23</h2>
              <p>Control de usuarios y tareas</p>
            </div>
            <div className='col-md-6'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={ <MostrarUsuario/>} ></Route>
                  <Route path='/editar/:id' element={ <EditarUsuario/>} ></Route>
                </Routes>
              </BrowserRouter>
            </div>
            <div className='col-md-6'>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={ <CrearUsuario/>} ></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
