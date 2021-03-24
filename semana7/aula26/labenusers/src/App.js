import React from 'react';
import './App.css';
import Login from './components/Login'
import Lista from './components/Lista';
import styled from 'styled-components';
import axios from 'axios';
import TelaUsuario from './components/TelaUsuario';
import { baseUrl, axiosConfig } from './components/Parametros';

const BotaoLista = styled.button`
    width: 200px;
    height: 20px;
`

class App extends React.Component {

  state = {
    users: [], 
    ligar: false,
    guardarUsuario: [],
    ligarTela: false,
    ligarLogin: true
  };

  ligarLista = () => {
    this.setState({
      ligar: !this.state.ligar
    })
  }


  getAll = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    );
    request
      .then((response) => {
        this.setState({ users: response.data })
        console.log(response.data)
        console.log(this.state.users)
      })

      .catch((error) => {
        alert("Infelizmente ocorreu algum problema com o nosso site :( Mas Já estamos tentando consertar! :) Aguarde um pouco ou volte mais tarde.")
      })
  };


  excluirUsuario = async (p) => {
    if (window.confirm('Deseja mesmo deletar esse usuário? Essa ação é irreversível.')) {
      axios.delete(`${baseUrl}/${p.id}`, axiosConfig)
        .then((resp) => {
          this.getAll()
        })
        .catch((erro) => {
          alert('Ocorreu algum problema!!! Tente novamente ou retorne mais tarde.')
        })
    }
  }

  acessarUsuario = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, axiosConfig)
      this.setState({ guardarUsuario: response.data,
                      ligarTela: !this.state.ligarTela,
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.getAll();
  };

  render() {
    return (
      <div className="App">
        {/* {this.state.ligarLogin && <Login/>} */}
        {this.state.ligar === false ? <Lista listaUsuario={this.state.users} excluirUsuario={this.excluirUsuario}
          ligarTela={this.state.ligarTela} acessarUsuario={this.acessarUsuario} nome={this.state.guardarUsuario.name} /> : <Login getAll={this.getAll} />}
        <TelaUsuario getAll={this.getAll} acessarUsuario={this.acessarUsuario} />
        <BotaoLista onClick={this.ligarLista}>Ir para a lista</BotaoLista>
      </div>
    )
  }
}

export default App;