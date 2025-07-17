import { useState, useEffect } from "react";

export default function EffectAPI() {
  // Estados para cada tabela
  const [usuariosName, setUsuariosName] = useState([]);
  const [loadingName, setLoadingName] = useState(false);
  const [loadTriggerName, setLoadTriggerName] = useState(false); // controla disparo do useEffect

  const [usuariosUsername, setUsuariosUsername] = useState([]);
  const [loadingUsername, setLoadingUsername] = useState(false);
  const [loadTriggerUsername, setLoadTriggerUsername] = useState(false);

  const [usuariosCity, setUsuariosCity] = useState([]);
  const [loadingCity, setLoadingCity] = useState(false);
  const [loadTriggerCity, setLoadTriggerCity] = useState(false);

  // useEffect para carregar dados de name
  useEffect(() => {
    if (!loadTriggerName) return; // não carrega até o botão ser clicado

    const fetchUsers = async () => {
      setLoadingName(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsuariosName(data);
      } catch (error) {
        console.error("Erro ao carregar nomes:", error);
      } finally {
        setLoadingName(false);
      }
    };

    fetchUsers();
  }, [loadTriggerName]);

  // useEffect para carregar dados de username
  useEffect(() => {
    if (!loadTriggerUsername) return;

    const fetchUsers = async () => {
      setLoadingUsername(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsuariosUsername(data);
      } catch (error) {
        console.error("Erro ao carregar usernames:", error);
      } finally {
        setLoadingUsername(false);
      }
    };

    fetchUsers();
  }, [loadTriggerUsername]);

  // useEffect para carregar dados de city
  useEffect(() => {
    if (!loadTriggerCity) return;

    const fetchUsers = async () => {
      setLoadingCity(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsuariosCity(data);
      } catch (error) {
        console.error("Erro ao carregar cidades:", error);
      } finally {
        setLoadingCity(false);
      }
    };

    fetchUsers();
  }, [loadTriggerCity]);

  return (
    <div>
      {/* Tabela de Nomes */}
      <section style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
        <h2>Tabela de Names</h2>
        <button onClick={() => setLoadTriggerName(true)}>Carregar Nomes</button>
        {loadingName ? (
          <p>Carregando nomes...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {usuariosName.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Tabela de Usernames */}
      <section style={{ border: "2px solid green", margin: "10px", padding: "10px" }}>
        <h2>Tabela de Usernames</h2>
        <button onClick={() => setLoadTriggerUsername(true)}>Carregar Usernames</button>
        {loadingUsername ? (
          <p>Carregando usernames...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {usuariosUsername.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Tabela de Cidades */}
      <section style={{ border: "2px solid red", margin: "10px", padding: "10px" }}>
        <h2>Tabela de Cidades</h2>
        <button onClick={() => setLoadTriggerCity(true)}>Carregar Cidades</button>
        {loadingCity ? (
          <p>Carregando cidades...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {usuariosCity.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
