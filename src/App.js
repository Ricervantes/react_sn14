//import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulos';
//import React from'react';
function App() {
  return (
    <>
      <Titulo nombre="Pedro"  apellido="Correa"/>
      <Titulo nombre="Jesus" apellido={2}/>
      <Titulo nombre="Cristina" apellido={2}/>
      <Titulo nombre="Diego" apellido={2}/>
    </>
  );
}
export default App;
