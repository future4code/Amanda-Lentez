import React from 'react';
import './App.css';
import Login from './components/Login'
import List from './components/List';
import styled from 'styled-components';
import axios from 'axios';
import ScreenUser from './components/ScreenUser';
import { baseUrl, axiosConfig } from './components/Parameters';

const BtnList = styled.button`
    width: 200px;
    height: 20px;
`

class App extends React.Component {

  state = {
    users: [], 
    access: false,
    keepUser: [],
    accessScreen: false,
    accessLogin: true
  };

  accessList = () => {
    this.setState({
      access: !this.state.access
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


  deleteUser = async (p) => {
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

  getAccessUser = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, axiosConfig)
      this.setState({ keepUser: response.data,
                      accessScreen: !this.state.accessScreen,
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
        {/* {this.state.accessLogin && <Login/>} */}
        {this.state.access === false ? <List accessUser={this.state.users} deleteUser={this.deleteUser}
          accessScreen={this.state.accessScreen} accessUser={this.accessUser} nome={this.state.keepUser.name} /> : <Login getAll={this.getAll} />}
        <ScreenUser getAll={this.getAll} getAccessUser={this.accessUser} />
        <BtnList onClick={this.accessList}>Ir para a lista</BtnList>
      </div>
    )
  }
}

export default App;