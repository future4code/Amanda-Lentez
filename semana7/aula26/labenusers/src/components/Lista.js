import React from 'react';
import styled from 'styled-components';
import TelaUsuario from './TelaUsuario';

const DivResultado = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid black;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`
const DivCaixa = styled.div`
    width: 300px;
    height: 50px;
    margin: auto;
`

const DivDeletar = styled.button`
    width: 50px;
    height: 20px;
`

const AcessarUsuario = styled.button`
    width: 50px;
    height: 20px;
`

class Lista extends React.Component {

    render() {
        const mapear = this.props.listaUsuario.map(p => {
            return (
                <div>
                <DivCaixa>
                    <strong>Usuário: </strong>{p.name}
                    <AcessarUsuario onClick={() => { this.props.acessarUsuario(p.id)}}>Acessar</AcessarUsuario>
                    {this.props.ligarTela && (<TelaUsuario nome={this.props.nome}/>)}
                    {/* <TelaUsuario nome={this.props.nome}/> */}
                    <DivDeletar onClick={() => { this.props.excluirUsuario(p)}}>Deletar</DivDeletar>
                </DivCaixa>
                {this.props.ligarTela && (<TelaUsuario nome={this.props.nome}/>)}
                </div>
            )
        })
        return (
            <DivResultado>
                <h1>Lista de usuários</h1>
                {mapear}
            </DivResultado>
        )
    }
}

export default Lista;