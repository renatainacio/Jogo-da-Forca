import styled from 'styled-components'

const ButtonChute = styled.button`
    width: 100px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-size: 16px;
    line-height: 19px;
    color: #3C76A1;
`;

const InputChute = styled.input`
    width: 353px;
    height: 40px;  
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px; 
`;

const PChute = styled.p`
    width: 144px;
    height: 40px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
`;

const FormChute = styled.form`
    width: 624px;
    height: 40px; 
    margin: 56px auto;
    display: flex;
    justify-content: space-between;
`;

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
        <FormChute>                
            <PChute>Já sei a palavra!</PChute>
            <InputChute
                onChange={atualizarTexto}
                value={chute}
                disabled={game === 0 ? true : false}
                data-test="guess-input"
            />
            <ButtonChute type="button" onClick={chutar} disabled={game === 0 ? true : false} data-test="guess-button">Chutar</ButtonChute>
        </FormChute>
    )
    }
