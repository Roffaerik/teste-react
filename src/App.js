import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Fotos from './components/foto/foto';
import Contato from './components/contato/contato';
import Comentario from './components/comentario/comentario';
import Ingresso from './components/button/ingresso';

function App(){
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/contatos' element={<Contato/>}/>
        <Route path='/comentarios' element={<Comentario/>}/>
        <Route path='/ingresso' element={<Ingresso/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
