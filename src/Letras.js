export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <ul className="letras">
            {alfabeto.map((letra, indice) =>
            <li key={indice} className={`letra ${props.game == 0 ? 'desabilitada' : ''}`} disabled={props.game == 0 ? true : false}>
                {letra}
            </li>
                )}
        </ul>
    )
}