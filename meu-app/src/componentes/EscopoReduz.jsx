const EscopoReduz = () => {
    function handleClick(){
        return(
            alert("handleClick")
        )
    }
    return(
        <>
            <button onClick={() => console.log("Você clicou!")} >Clique</button>
            <div>
                <button onClick={() => alert("Você clicou!")}>Novo Botão</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick</button>
            </div>
            <div className="container" onClick={() => alert("container")}></div>
        </>
    )
}

export default EscopoReduz