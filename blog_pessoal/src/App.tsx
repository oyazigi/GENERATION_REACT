import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from '../components/Card/Card';
import Task from "../components/Task/Task"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/cards" element = {<Card titulo = "Rotas" descricao = "Elemento carregado a partir da rota especificada"/>}/>
     <Route path = "/task1" element = {<Task/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
