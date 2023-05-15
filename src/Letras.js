export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let {game, palavra, acertos, setAcertos, erros, setErros} = props;
    function pressionarLetra(letra) {
        if(palavra.includes(letra)) {
            const novoAcertos = [...acertos, letra];
            setAcertos(novoAcertos);
        }
        else {
            const novoErros = [...erros, letra];
            setErros(novoErros);
        }
    }
    
    return (
        <ul className="letras">
            {alfabeto.map((letra, indice) =>
            <li key={indice}
                className={`letra ${(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? 'desabilitada' : ''}`} 
                disabled={(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? true : false}
                onClick={() => pressionarLetra(letra)}>
                {letra}
            </li>
                )}
        </ul>
    )
}