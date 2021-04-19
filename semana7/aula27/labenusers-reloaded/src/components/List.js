import React from 'react';
import styled from 'styled-components';
import UserScreen from './UserScreen';

const DivResult = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid black;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-bottom: 50px;
`
const DivBox = styled.div`
    width: 300px;
    height: 100%;
    margin: auto;
`

const DivDelete = styled.button`
    width: 200px;
    height: 20px;
    background-color: #FFFFFF;
    border: none;
    margin: 2px;
    border: 1px solid #79b524;
`

const GoToUser = styled.button`
    width: 200px;
    height: 20px;
    background-color: #79b524;
    border: none;
    margin: 2px;
`

class List extends React.Component {

    render() {
        const maping = this.props.listUser.map(p => {
            return (
                <div>
                <DivBox>
                    <strong>Usuário: </strong>{p.name}
                    <GoToUser onClick={() => { this.props.goToUser(p.id)}}>Acessar</GoToUser>
                    {this.props.turnScreen && (<UserScreen name={this.props.name}/>)}
                    <DivDelete onClick={() => { this.props.deleteUser(p)}}>Deletar</DivDelete>
                </DivBox>
                </div>
            )
        })
        return (
            <DivResult>
                <h1>Lista de usuários</h1>
                {maping}
            </DivResult>
        )
    }
}

export default List;