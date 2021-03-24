import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivCadastro = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 250px;
    margin: auto;
    margin-top: 50px;
`

const InputNome = styled.input`
    width: 100px;
    height: 10px;
`

const InputEmail = styled.input`
    width: 100px;
    height: 10px;
`

const BotaoSalvar = styled.button`
    width: 100px;
    height: 30px;
    color: white;
`


class Usuarios extends React.Component {

    state = {
        inputNome: "", 
        inputEmail: "", 
    };

    criarUsuario = () =>{
        const body = {
            name: this.state.inputNome, 
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
        .then((resposta) =>{
            alert("User criado! Parabéns!")
            this.props.getAll() 
        })
        .catch((erro) =>{
            alert("Não deu certo :( Tente novamente ou retorne mais tarde.")
        })
    }    

    
    getInputNome = (event) => {
        this.setState({
            inputNome: event.target.value
        })
        console.log(this.state.inputNome)
    }

    getInputEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
        console.log(this.state.inputEmail)
    }

    render() {
        return (
            <DivCadastro>
                <p><strong>Nome:</strong></p>
                <InputNome onChange={this.getInputNome} value={this.state.valorInput}/>
                <p><strong>Email:</strong></p>
                <InputEmail onChange={this.getInputEmail}/>
                <p><BotaoSalvar onClick={this.criarUsuario}>Criar usuario</BotaoSalvar></p>
            </DivCadastro>
        )
    }
}

export default Usuarios;