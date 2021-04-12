import React, { useState } from 'react'
import styled from 'styled-components'
import GetMatches from './GetMatches'
import PersonCard from './PersonCard'
import axios from 'axios'

const HomeContainer = styled.div`
  text-align: center;
  padding: 4px;
`

function Home() {
  const [currentPage, setCurrentPage] = useState("Home")

  const changePage = () => {
    if (currentPage === "Home") {
      setCurrentPage("personCard")
    } else {
      setCurrentPage("Home")
    }
  }

  const resetProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/clear"
      )
      .then((response) => {
          alert("Lista de matches limpa!")
        // getProfile();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  


  return(
    <HomeContainer>
      <button onClick={changePage}>Ver matches</button>
      <button onClick={() => resetProfiles()}>Resetar matches</button>
      {currentPage === "Home" ? (
        <div>
        <PersonCard></PersonCard>
        </div>
      ) : (
        <GetMatches />
      )}
      
    </HomeContainer>
  )
}
export default Home