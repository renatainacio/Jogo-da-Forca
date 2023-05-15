export default function Chute(props) {

    const {chute, setChute, game, setGame, acertos, setAcertos, palavra, erros, setErros, setChutouCerto} = props;

    function atualizarTexto(event) {
        setChute(event.target.value);
    }

    function chutar() {
        const novoErros = [...erros];
        setGame(0);
        if (chute === palavra) {
            setChutouCerto(1);
            const chuteArray = chute.split("");
            chuteArray.forEach(letra => {
                    const novoAcertos = [...acertos, letra];
                    setAcertos(novoAcertos);
                }
            );
        }
        else {
            for(let i = 0; i < 6 - erros.length; i++)
                novoErros.push(chute[i]);
            setErros(novoErros);
        }
        setChute('');
    }
    return (
        <form className="chute">                
            <p>Já sei a palavra!</p>
            <input
                onChange={atualizarTexto}
                value={chute}
                disabled={game === 0 ? true : false}
                data-test="guess-input"
            />
            <button type="button" onClick={chutar} disabled={game === 0 ? true : false} data-test="guess-button">Chutar</button>
        </form>
    )
    }
