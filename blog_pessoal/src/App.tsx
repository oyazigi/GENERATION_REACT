import Card from '../components/Card/Card';
import Task from "../components/Task/Task"
import './App.css'

function App() {

  return (
    <>
     <Card titulo = "React" descricao = "biblioteca com JS"/>
     <Card titulo = "Spring" descricao = "Framework de java"/>
     <Task/>
    </>
  )
}

export default App
