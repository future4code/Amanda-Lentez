import React from 'react';
import './App.css';
import Login from './components/Login'
import styled from 'styled-components';
import List from './components/List';
import axios from 'axios';
import UserScreen from './components/UserScreen';
import { baseUrl, axiosConfig } from './components/Parameters';

const BtnList = styled.button`
    width: 400px;
    height: 50px;
    background-color: #79b524;
    border: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFFFFF;
`

class App extends React.Component {

  state = {
    users: [],
    turn: false,
    saveUser: [],
    turnScreen: false,
    turnLogin: true
  };

  turnList = () => {
    this.setState({
      turn: !this.state.turn
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

      .catch((err) => {
        alert("Ocorreu um erro! Atualize a página ou retorne mais tarde.")
      })
  };


  deleteUser = async (p) => {
    if (window.confirm('Tem certeza que deseja deletar esse usuário?')) {
      axios.delete(`${baseUrl}/${p.id}`, axiosConfig)
        .then((response) => {
          this.getAll()
        })
        .catch((err) => {
          alert('Ocorreu um erro! Atualize a página ou retorne mais tarde.')
        })
    }
  }

  goToUser = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, axiosConfig)
      this.setState({ saveUser: response.data,
                      turnScreen: !this.state.turnScreen,
      })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount = () => {
    this.getAll();
  };

  render() {
    return (
      <div className="App">
        {this.state.turn === false ? <List listUser={this.state.users} deleteUser={this.deleteUser}
          turnScreen={this.state.turnScreen} goToUser={this.goToUser} name={this.state.saveUser.name} /> : <Login getAll={this.getAll} />}
        <UserScreen getAll={this.getAll} goToUser={this.goToUser} />
        <BtnList onClick={this.turnList}>Ver Lista</BtnList>
      </div>
    )
  }
}

export default App;