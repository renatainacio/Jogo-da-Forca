import palavras from './palavras.js';
import imagemForca0 from './assets/forca0.png'
import imagemForca1 from './assets/forca1.png'
import imagemForca2 from './assets/forca2.png'
import imagemForca3 from './assets/forca3.png'
import imagemForca4 from './assets/forca4.png'
import imagemForca5 from './assets/forca5.png'
import imagemForca6 from './assets/forca6.png'
import Letras from './Letras'
import Chute from './Chute'
import styled from 'styled-components'

const ButtonIniciarJogo = styled.button`
margin-top: 89px;
margin-right:53px;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
width: 200px;
height: 60px;
background: #27AE60;
border-radius: 8px;
`;

const DivBotaoPalavra = styled.div`
    margin-top: 89px;
    margin-right:53px;
    margin-bottom: 97px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DivMain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default function Jogo(props) {
    let {palavra, setPalavra, acertos, setAcertos, game, setGame, erros, setErros, chute, setChute, chutouCerto, setChutouCerto} = props;
    const imagemForca = [imagemForca0, imagemForca1, imagemForca2, imagemForca3, imagemForca4, imagemForca5, imagemForca6];
    let numeroErros = erros.length;

    function comparador() { 
        return Math.random() - 0.5; 
    }

    function iniciarJogo() {
        setGame(1);
        setPalavra(palavras.sort(comparador)[0]);
        const novoErros = [];
        setErros(novoErros);
        const novoAcertos = [];
        setAcertos(novoAcertos);
        setChute('');
        setChutouCerto(0);
    }

    return (
      <div>
        <DivMain>
            <img src={imagemForca[numeroErros]} alt="forca" data-test="game-image"/>
            <DivBotaoPalavra>
                <ButtonIniciarJogo onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</ButtonIniciarJogo>
                <ul data-test="word" className={`palavra ${palavra.length === acertos.length || chutouCerto === 1 ? 'verde' : ''} ${erros.length === 6 ? 'vermelho' : ''}`}>{palavra.split("").map((letra, indice) =>
                    <li key={indice}>{acertos.includes(letra) || numeroErros === 6 || chutouCerto === 1 ? letra : '_ '}</li>
                    )}</ul>
            </DivBotaoPalavra>
        </DivMain>
        <Letras
            game={game}
            setGame={setGame}
            palavra={palavra}
            acertos={acertos}
            setAcertos={setAcertos}
            erros={erros}
            setErros={setErros}
        />
        <Chute
            chute={chute}
            setChute={setChute}
            game={game}
            setGame={setGame}
            acertos={acertos}
            setAcertos={setAcertos}
            erros={erros}
            setErros={setErros}
            palavra={palavra}
            chutouCerto={chutouCerto}
            setChutouCerto={setChutouCerto}
        />
      </div>
    );
}