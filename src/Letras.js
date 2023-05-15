export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let {game, setGame, palavra, acertos, setAcertos, erros, setErros} = props;
    function pressionarLetra(letra) {
        let novoAcertos;
        if (game === 1) {
            if(palavra.includes(letra)) {
                novoAcertos = [...acertos];
                palavra.split("").forEach(element => {

                    if(element === letra)
                        novoAcertos.push(letra);
                });
                setAcertos(novoAcertos);
                if (novoAcertos.length === palavra.length)
                    setGame(0);
            }
            else {
                const novoErros = [...erros, letra];
                setErros(novoErros);
                if (novoErros.length === 6)
                    setGame(0);
            }
        }
    }
    
    return (
        <ul className="letras">
            {alfabeto.map((letra, indice) =>
            <li key={indice}
                className={`letra ${(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? 'desabilitada' : ''}`} 
                disabled={(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? true : false}
                onClick={() => pressionarLetra(letra)}
                data-test="letter">
                {letra}
            </li>
                )}
        </ul>
    )
}