import { useState, useEffect } from "react";

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Novo estado para controlar o modo
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Define a cor do corpo com base no estado isDarkMode
        document.body.style.backgroundColor = isDarkMode ? "#000" : "#FFF";
        document.body.style.color = isDarkMode ? "#FFF" : "#000"; // Para o texto
    }, [isDarkMode]); // O efeito roda quando isDarkMode muda

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode); // Alterna o estado
    };

    return (
        <>
          <div className="card">
            <button onClick={toggleDarkMode}>
              Alternar Modo: {isDarkMode ? "Escuro" : "Claro"}
            </button>
            <button onClick={() => setCount((count) => count + 1)}>
              Contador: {count}
            </button>
          </div>
        </>
      );
}
