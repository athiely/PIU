import './Lista.css'
import { useState } from "react"


export default function Listas(){
    
    const[tarefa, setTarefa] = useState('')
    const[listas, setListas] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setListas([...listas, tarefa])

        setTarefa('')
    }

    const handleClear=()=> {
        setListas([])
    }

    return(
        <div>
            <h2>Listas tarefas info 1v</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )














}
















