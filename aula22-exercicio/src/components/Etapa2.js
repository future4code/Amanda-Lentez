import React from 'react'
import PerguntaAberta from './PerguntaAberta'

export default class Etapa2 extends React.Component {
    render() {
        return (
          <div>
            <h1>Etapa 2 - Informações do Ensino Superior</h1>
            <PerguntaAberta pergunta={"5. Qual curso?"} />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
        </div>
        );
    }
    }