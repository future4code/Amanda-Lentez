import React from 'react';
import styled from 'styled-components';

const DivResposta = styled.div`
    /* margin: auto; */
    width: 50px;
    border: 1px solid black;
    margin-top: 500px;
`

class TelaUsuario extends React.Component{

    render(){
       
        return(
            <DivResposta>
               {this.props.nome}
            </DivResposta>
        )
    }
}


export default TelaUsuario;