import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivSignUp = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 250px;
    margin: auto;
    margin-top: 50px;
`

const InputName = styled.input`
    width: 100px;
    height: 10px;
`

const InputEmail = styled.input`
    width: 100px;
    height: 10px;
`

const BtnSave = styled.button`
    width: 100px;
    height: 30px;
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
            alert("User criado! Parabéns!")
            this.props.getAll() 
        })
        .catch((err) =>{
            alert("Não deu certo :( Tente novamente ou retorne mais tarde.")
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
                <p><strong>Nome:</strong></p>
                <InputName onChange={this.getInputName} value={this.state.valorInput}/>
                <p><strong>Email:</strong></p>
                <InputEmail onChange={this.getInputEmail}/>
                <p><BtnSave onClick={this.createUser}>Criar usuario</BtnSave></p>
            </DivSignUp>
        )
    }
}

export default Users;