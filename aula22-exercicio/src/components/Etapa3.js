import React from 'react'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

export default class Etapa3 extends React.Component {
    render() {
        return (
          <div>
            <h1>Etapa 3 - Informações gerais de ensino</h1>
            <PerguntaAberta
            pergunta={"5. Por que você não terminou um curso de graduação?"}
            />
            <PerguntaFechada
            pergunta={"6. Você fez algum curso complementar?"}
            opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
            />
        </div>
        );
    }
    }
    