import { useState, useEffect } from 'react';

export default function FastAPI() {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchTarefas = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setTarefas(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchTarefas();
  }, []); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>;
  }
<input>digite id</input>
        if input === id: 
            return (
    <div>
        
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={{tarefa.id}>{tarefa.title}</li>
        ),[]}
      </ul>
    </div>
  );
  
}

