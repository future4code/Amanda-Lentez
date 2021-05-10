import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MatchesList = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    img {
        width: 12vw;
        height: 24vh;
        padding: 8px;
        border: 2px solid grey;
    } 
    p {
        margin: auto;
        padding: 20px;
    }
`

function GetMatches() {
    const [matches, setMatches] = useState([])
    const [userChoice, setUserChoice] = useState([])

    const getMatches = () => {
        axios
            .get
                ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/matches"
                )
            .then((response) =>{
                console.log(response.data.matches)
                setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect (() => {
        if (getMatches.length ===0) {
        getMatches()
        } else{
            setMatches()
        }
    }, [getMatches])

    const listMatches = matches.map((match) => {
        return (
            <MatchesList>
                <img src={match.photo} alt="imagem" />
                <p>{match.name}</p>
            </MatchesList>
        )
    })

    return (listMatches)
}

export default GetMatches