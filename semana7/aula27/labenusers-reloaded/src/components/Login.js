import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivSignUp = styled.div`
    width: 400px;
    height: 350px;
    margin: auto;
    margin-top: 50px;
    padding-top: 20px;
    box-shadow: 2px 2px 3px #888888;
`

const InputName = styled.input`
    width: 300px;
    height: 20px;
`

const InputEmail = styled.input`
    width: 300px;
    height: 20px;
`

const BtnSave = styled.button`
    width: 100px;
    height: 30px;
    background-color: #79b524;
    border: none;
    color: white;
`


class Users extends React.Component {

    state = {
        inputName: "", 
        inputEmail: "", 
    };

    createUser = () =>{
        const body = {
            name: this.state.inputName, 
            email: this.state.inputEmail  
        };

        const request = axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers:{
                    Authorization: "amanda-lentez-cruz"
                }
            }
        )
        request
        .then((response) =>{
            alert("Usuário adicionado com sucesso!")
            this.props.getAll() 
        })
        .catch((err) =>{
            alert("Ocorreu algum problema! Por favor, tente novamente ou retorne mais tarde.")
        })
    }    
    
    getInputName = (event) => {
        this.setState({
            inputName: event.target.value
        })
        console.log(this.state.inputName)
    }

    getInputEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
        console.log(this.state.inputEmail)
    }

    render() {
        return (
            <DivSignUp>
                <h2>Cadastro usuário</h2>
                <p><strong>Nome:</strong></p>
                <InputName onChange={this.getInputName} value={this.state.valueInput}/>
                <p><strong>Email:</strong></p>
                <InputEmail onChange={this.getInputEmail}/>
                <p><BtnSave onClick={this.createUser}>Criar usuário</BtnSave></p>
            </DivSignUp>
        )
    }
}

export default Users;