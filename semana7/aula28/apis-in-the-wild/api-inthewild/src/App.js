import React from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonSelect = styled.select`
  max-width: 100%;
  border: none;
  background-color: #cccccc;
  text-transform: uppercase;
`;

const AppContainer = styled.div `
display: flex;
width: 500px;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 2px 2px 2px #888888;
margin: 50px auto;
text-align: center;
padding-bottom: 50px;
`

class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemonUrl: ""
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    axios.get(apiUrl).then((response) => {
      this.setState({ pokemonList: response.data.results });
    });
  };

  onChangeSelect = (event) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
      this.setState({
        selectedPokemonUrl: response.data.sprites.front_default
      });
    });
  };

  render() {
    console.log(this.state.pokemonList);
    const optionList = this.state.pokemonList.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    return (
      <AppContainer>
        <h1>Bem-vindx Treinadxr!</h1>
        <h3>Parabéns, você está prestes a iniciar sua jornada!</h3>
        <h2>Escolha o seu primeiro pokémon:</h2>
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
        <img src={this.state.selectedPokemonUrl} />
      </AppContainer>
    );
  }
}

export default App;