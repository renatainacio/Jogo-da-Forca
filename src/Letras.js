import styled from 'styled-components'

const LetrasUl = styled.ul`
    width: 702px;
    margin: 71px auto 71px auto;
    display: flex;
    flex-wrap: wrap;
`;

const LetraLi = styled.li`
    width: 40px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #39739D;
    margin-right:6px;
    margin-left:6px;
    margin-bottom:12px;
`;

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
        const index = (letra) => caracteresEspeciais.indexOf(letra) !== -1;
        return (arrayPalavra.some(index));
    }
    function pressionarLetra(letra) {
        let novoAcertos;
        if (game === 1) {
            caracteresEspeciais = setCaracteresEspeciais(letra);
            if(palavra.includes(letra) || contemCaractereEspecial(caracteresEspeciais, palavra)) {
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
        <LetrasUl>
            {alfabeto.map((letra, indice) =>
            <LetraLi key={indice}
                className={`letra ${(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? 'desabilitada' : ''}`} 
                disabled={(game === 0 || erros.includes(letra) || acertos.includes(letra)) ? true : false}
                onClick={() => pressionarLetra(letra)}
                data-test="letter">
                {letra}
            </LetraLi>
                )}
        </LetrasUl>
    )
}