import Jogo from './Jogo'
import { useState } from 'react'

export default function App() {
  const [game, setGame] = useState(0);
  const [erros, setErros] = useState([]);
  const [acertos, setAcertos] = useState([]);
  const [palavra, setPalavra] = useState("");
  const [chute, setChute] = useState("");
  const [chutouCerto, setChutouCerto] = useState(0);
  return (
    <div>
      <Jogo 
        game={game}
        setGame={setGame}
        palavra={palavra}
        setPalavra={setPalavra}
        acertos={acertos}
        setAcertos={setAcertos}
        erros={erros}
        setErros={setErros}
        chute={chute}
        setChute={setChute}
        chutouCerto={chutouCerto}
        setChutouCerto={setChutouCerto}
      />
    </div>
  );
}