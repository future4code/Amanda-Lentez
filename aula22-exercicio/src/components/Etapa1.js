import React from 'react'
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

export default class Etapa1 extends React.Component {
    render() {
        return (
          <div>
            <h1>Etapa 1 - Geral</h1>
            <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
            <PerguntaAberta pergunta={"2. Qual sua idade?"} />
            <PerguntaAberta pergunta={"3. Qual seu email?"} />
            <PerguntaFechada
            pergunta={"4. Qual a sua escolaridade?"}
            opcoes={[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
            ]}
            />
      </div>
    );
  }
}
