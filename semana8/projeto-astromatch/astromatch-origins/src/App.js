import React, { useState, useEffect } from "react";
import axios from "axios";
import like from './imagens/like.png';
import unlike from './imagens/unlike.png'
import { ProfileHome, BoxChoice, ImageSet, CardHome, Main } from './components/Styled'
import list from './imagens/fotos-80.png'
import TelaMatches from './components/TelaMatches';


export default function App() {

  const [perfil, setperfil] = useState({})

  const [mostrarMatches, setmostrarMatches] = useState(false)

  //pegar os perfis da API ********* GET ************ //

  const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/person")
      .then(responda => {
        setperfil(responda.data.profile)
        console.log(responda.data.results)
      }).catch(error => {
        console.log('nao pegou')
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const ChosePerson = (like) => {
    const body = {
      id: perfil.id,
      choice: like
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/choose-person", body)
      .then((responda) => {
        getProfile()
      }).catch((error) => {
        console.log('nao foi')
      })
  }

  const ChangePage = () => { //clique na imagem
    setmostrarMatches(!mostrarMatches) //se tiver true ele seta false e vice e versa
  }

  const Page = () => {
    if (mostrarMatches === true) {
      return (
        <div>
          <TelaMatches />
        </div>
      )
    }
    else {
      return (
        <CardHome>
          <ProfileHome>
            <ImageSet src={perfil.photo}/>
            <p><strong>Name: </strong>{perfil.name}</p>
            <p><strong>Age: </strong>{perfil.age}</p>
            <p><strong>Bio: </strong>{perfil.bio}</p>
          </ProfileHome>

          <BoxChoice>
            <img src={unlike} onClick={() => ChosePerson(false)} />
            <img src={like} onClick={() => ChosePerson(true)} />
          </BoxChoice>
        </CardHome>
      )
    }

  }

  return (
    <Main>
      <img src={list} onClick={ChangePage} />
      {Page()}
    </Main>
  );
}