import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 48vh;
    width: 44vw;
    border: 2px solid grey;
    padding: 12px;
    margin: 40px;
 img {
    width: 20vw;
    height: 40vh;
    text-align: center;
} 
`

const Profile = styled.div`
    display: flex;
`
const IsMatch = styled.div`
    display: flex;
    align-items: center;
`
const Button = styled.button`
    height: 50px;
    width: 70px;
`
const Photo = styled.image`
  
`
const Text = styled.div`
    margin: auto;
    padding: 20px;
`

function PersonCard() {
    const [profile, setProfile] = useState({})
    const [userChoice, setUserChoice] = useState(false)

    useEffect(() => {
        getProfile()
    },
    [])

    const getProfile = () => {
        axios
            .get
                ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/person"
                )
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const choosePerson = (id) => {
        const body = {
            id: profile.id,
            choice: id,
        }
        axios
            .post
            ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/choose-person", 
            body
            )
            .then((response) => {
                getProfile()
                if (response.data.isMatch === true) {

                    alert("Deu match!")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return(
        <Container>
            {profile &&
            <Profile>
                <Photo><img src={profile.photo} /></Photo>
                <Text>
                    <h3><p>{profile.name}, {profile.age}</p></h3>
                    <h5><p>{profile.bio}</p></h5>
                </Text>
            </Profile>
        }

            <IsMatch>
                <Button onClick={() => choosePerson(profile.id, false)}>X</Button>
                <Button onClick={() => choosePerson(profile.id, true)}>♥</Button>
            </IsMatch>

        </Container>
    )

}

  export default PersonCard