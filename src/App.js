import Jogo from './Jogo'
import { useState } from 'react'

export default function App() {
  const [game, setGame] = useState(0);
  const [erros, setErros] = useState([]);
  const [acertos, setAcertos] = useState([]);
  const [palavra, setPalavra] = useState("");
  return (
    <div>
      <Jogo game={game} setGame={setGame} palavra={palavra} setPalavra={setPalavra} acertos={acertos} setAcertos={setAcertos} erros={erros} setErros={setErros}/>
    </div>
  );
}