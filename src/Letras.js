export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let {game, setGame, palavra, acertos, setAcertos, erros, setErros} = props;
    let caracteresEspeciais = [];
    function setCaracteresEspeciais(letra) {
        caracteresEspeciais = [];
        if(letra === 'a')
            caracteresEspeciais = ['ã', 'á', 'â', 'à'];
        else if(letra === 'e')
            caracteresEspeciais = ['é', 'ê'];
        else if(letra === 'i')
            caracteresEspeciais = ['í'];
        else if(letra === 'o')
            caracteresEspeciais = ['õ', 'ó', 'ô'];
        else if(letra === 'u')
            caracteresEspeciais = ['ú'];
        else if(letra === 'c')
            caracteresEspeciais = ['ç'];
        return (caracteresEspeciais);
    }
    
    function contemCaractereEspecial(caracteresEspeciais, palavra) {
        const arrayPalavra = palavra.split("");
        console.log(arrayPalavra);
        const index = (letra) => caracteresEspeciais.indexOf(letra) !== -1;
        return (arrayPalavra.some(index));
    }
    function pressionarLetra(letra) {
        let novoAcertos;
        if (game === 1) {
            caracteresEspeciais = setCaracteresEspeciais(letra);
            if(palavra.includes(letra) || contemCaractereEspecial(caracteresEspeciais, palavra)) {
                console.log("acertou");
                novoAcertos = [...acertos];
                palavra.split("").forEach(element => {
                    if(element === letra)
                        novoAcertos.push(letra);
                    else if(caracteresEspeciais.indexOf(element) !== -1)
                        novoAcertos.push(caracteresEspeciais[caracteresEspeciais.indexOf(element)])
                });
                setAcertos(novoAcertos);
                console.log(novoAcertos);
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