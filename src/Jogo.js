import palavras from './palavras.js';
import imagemForca0 from './assets/forca0.png'
import imagemForca1 from './assets/forca1.png'
import imagemForca2 from './assets/forca2.png'
import imagemForca3 from './assets/forca3.png'
import imagemForca4 from './assets/forca4.png'
import imagemForca5 from './assets/forca5.png'
import imagemForca6 from './assets/forca6.png'
import Letras from './Letras'

export default function Jogo(props) {
    let {palavra, setPalavra, acertos, setAcertos, game, setGame, erros, setErros} = props;
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
    }
    return (
      <div>
        <div className='main'>
            <img src={imagemForca[numeroErros]} alt="forca" data-test="game-image"/>
            <div className='botao-palavra'>
                <button onClick={iniciarJogo} data-test="choose-word">Escolher Palavra</button>
                <ul data-test="word" className={`palavra ${palavra.length === acertos.length ? 'verde' : ''} ${erros.length === 6 ? 'vermelho' : ''}`}>{palavra.split("").map((letra, indice) =>
                    <li key={indice}>{acertos.includes(letra) ? letra : '_ '}</li>
                    )}</ul>
            </div>
        </div>
        <Letras game={game} setGame={setGame} palavra={palavra} acertos={acertos} setAcertos={setAcertos} erros={erros} setErros={setErros}/>
      </div>
    );
}