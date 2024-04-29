import { useEffect, useState } from 'react'
import './Task.css'

function Task() {

  const[complete, setComplete] = useState(false);
  const[tarefa, setTarefa] = useState("");

  useEffect( () => {
    if(complete == true){
      setTarefa("Tarefa concluída!")
    }
  } , [complete]);

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa : {tarefa}</h3>
        <button onClick={() => {setComplete(true)} }>Conclua a Tarefa</button>
    </div>
  )
}

export default Task