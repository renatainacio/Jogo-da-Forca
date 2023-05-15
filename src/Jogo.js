import palavras from './palavras.js';
import imagemForca0 from './assets/forca0.png'
import Letras from './Letras'

export default function Jogo(props) {
    console.log(palavras);
    return (
      <div>
        <div className='main'>
            <img src={imagemForca0}/>
            <button onClick={() => props.setGame(1)}>Escolher Palavra</button>
        </div>
        <Letras game={props.game}/>
      </div>
    );
}