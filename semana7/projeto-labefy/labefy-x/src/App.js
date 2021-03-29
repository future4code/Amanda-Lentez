import React from "react";
import axios from "axios";
import styled from 'styled-components'
import './App.css';

const DivMain = styled.div`
  margin: 20px auto;
  width: 600px;
  text-align: center;
`

const BtnStyle = styled.button`
  margin: auto;
  width: 210px;
  height: 30px;
  background-color: #1ED760;
  color: white;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 30px;
  text-align: center;
  padding-top: 5px;
  border: none;
`

const BtnAccess = styled.button`
  margin: auto;
  width: 100px;
  height: 30px;
  background-color: #FFFFFF;
  color: #1ED760;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 30px;
  text-align: center;
  padding-top: 5px;
  border: 2px solid #1ED760;
  text-transform: uppercase;
`

const BtnDelete = styled.button`
  margin: auto;
  width: 100px;
  height: 30px;
  background-color: #1ED760;
  color: #FFFFFF;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 30px;
  text-align: center;
  padding-top: 5px;
  border: none;
  text-transform: uppercase;
`

const InputStyle = styled.input`
  width: 200px;
  border: none;
  border-bottom: 2px solid #1ED760;
`

const InputSelector = styled.select`
  width: 200px;
  border: none;
  background-color: #c3c3c3;
`

export default class App extends React.Component {
  state = {
    playlists: [], 
    inputValueplaylist: "", 
    inputNameMusic: '', 
    inputArtist: '', 
    inputUrl: '', 
    allTracks: [],
  };


  createPlaylist = () => {
    const body = {
      name: this.state.inputValueplaylist
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    );

    request.then((resposta) => {
      alert("Sua playlist foi criada com sucesso!");
      this.getAllPlaylists();
      this.setState({ inputValueplaylist: "" });
    })
      .catch((erro) => {
        alert("Eita! Aconteceu algum problema. Atualize a página ou volte mais tarde, tá?");
      });
  };

  getAllPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    );

    request.then((resposta) => {
      this.setState({ playlists: resposta.data.result.list });
    })
      .catch((erro) => {
        alert("Não é possível acessar a playlist :(" + erro.message);
      });
  };

  deletePlaylist = (id) => {
    const request = axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    )
    request.then((respondeu) => {
      alert('Você deletou a playlist.')
      this.getAllPlaylists()
    }).catch((error) => {
      alert('Sua playlist não foi deletada. Tente novamente ou volte mais tarde.')
    })
  }


  addTrackToPlaylist = (event) => {
    const id = event.target.value
    const body = {
      name: this.state.inputNameMusic,
      artist: this.state.inputArtist,
      url: this.state.inputUrl
    };
    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      body,
      {
        headers: {
          Authorization: "amanda-lentez-cruz",
        }
      }
    );
    request.then((respondeu) => {
      alert('A música foi adicionada!')
    }).catch((erro) => {
      alert('Ocorreu um problema em adicionar essa música. Tente novamente ou retorne mais tarde.')
    })
  }


  getPlaylistTracks = (id) => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    ).then((res) => {
      this.setState({ allTracks: res.data.result.tracks })
      console.log(res.data.result.tracks)
    }).catch((err) => {
      alert('Ocorreu algum erro.')
    })
  }

  searchTracks = (id) => {
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: "amanda-lentez-cruz"
        }
      }
    ).then((respondeu) => {
      this.setState({ allTracks: respondeu.data.result.tracks })
    }).catch((error) => {
      alert('Ocorrou algum problema.')
    })
  }


  componentDidMount = () => {
    this.getAllPlaylists();
  };


  onChangeNamePlaylist = (event) => {
    this.setState({ inputValueplaylist: event.target.value })
  };


  onChangeTrackName = (event) => {
    this.setState({ inputNameMusic: event.target.value })
  }

  onChangeInputAddArtist = (event) => {
    this.setState({ inputArtist: event.target.value })
  };

  onChangeInputAddUrl = (event) => {
    this.setState({ inputUrl: event.target.value })
  };


  render() {
    const playlistsRenderizadas = this.state.playlists.map((playlist) => {
      return(
      <DivMain>
        <strong>{playlist.name}</strong>
        <BtnAccess onClick={() => { this.searchTracks(playlist.id) }}>Acessar</BtnAccess>
        <BtnDelete onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar</BtnDelete>
      </DivMain>
      )
    });
    const mostrardetalhes = this.state.allTracks.map((detalhes) => {
      return (
        <div>
          <h1>Musica <img src="https://img.icons8.com/windows/48/000000/sound-cloud-.png"/></h1>
          <p>Artista: {detalhes.artist}</p>
          <p>Nome da musica: {detalhes.name}</p>
          <audio controls>
            <source src={detalhes.url} />
          </audio>
        </div>
      )
    })
    return (
      <div>
        <DivMain>
          <img src="https://cdn.iconscout.com/icon/free/png-512/spotify-11-432546.png" style={{
            resizeMode: "cover",
            height: 100,
            width: 100
          }}/>
          <h1 style={{color: "#1ED760"}}>Labefy - Origens</h1>
          <h3>Criar uma nova playlist</h3>
          <InputStyle onChange={this.onChangeNamePlaylist} value={this.state.inputValueplaylist} type="text" placeholder="Digite o nome da playlist"/>
          <br></br>
          <BtnStyle onClick={this.createPlaylist}>Criar</BtnStyle>
          <h3>Playlists</h3>
          {playlistsRenderizadas}
          <h3>Adicionar uma Musica</h3>
          <label>Nome: </label>
          <InputStyle value={this.state.inputNameMusic} onChange={this.onChangeTrackName} type="text" placeholder="Insira o nome da musica"/>
          <br></br>
          <label>Artista: </label>
          <InputStyle value={this.state.inputArtist} onChange={this.onChangeInputAddArtist} type="text" placeholder="Insira o nome do artista"/>
          <br></br>
          <label>Link da música: </label>
          <InputStyle value={this.state.inputUrl} onChange={this.onChangeInputAddUrl} type="text" placeholder="Insira o link da música"/>
          <h3>Selecione a playlist que deseja adicionar uma música</h3>
          <select onChange={this.addTrackToPlaylist}>
           <option></option>
           {this.state.playlists.map((i) => {
              return (
              <option value={i.id}>{i.name}</option>
              )
            })}
          </select>
          {mostrardetalhes}
        </DivMain>
      </div>
    );
  }
}