import Jogo from './Jogo'
import { useState } from 'react'

export default function App() {
  const [game, setGame] = useState(0);
  return (
    <div>
      <Jogo game={game} setGame={setGame}/>
    </div>
  );
}