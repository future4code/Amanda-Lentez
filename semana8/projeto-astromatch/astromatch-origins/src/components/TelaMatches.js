import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardMaches, Container, ImageSet, ProfileMatches } from './Styled'
import Button from '@material-ui/core/Button';

export default function TelaMatches() {

    const [lista, setlista] = useState([])
    const [clear, clearlist] = useState('')

    const getMaches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/matches")
            .then(respondeu => {
                setlista(respondeu.data.matches)
                console.log(respondeu.data.matches)
            }).catch(error => {
                console.log('nao pegou os maches')
            })
    }

    useEffect(() => {
        getMaches()
    }, [lista])


    // CLEAR //

    const Clear = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/amanda-lentez/clear")
            .then(respondeu => {
                alert('limpou')
            }).catch((error) => {
                alert('nao limpou')
            })
    }
    return (
        <div>
            <Button variant="contained" size="small" onClick={Clear}>Apagar matches</Button>
            <br />
            <br />
            <br />
            <CardMaches>
                <ProfileMatches>
                    {lista.map((p) => {
                        return (
                            <div>
                                <ImageSet src={p.photo} />
                                <p>{p.name}</p>
                            </div>
                        )
                    })}
                </ProfileMatches>
            </CardMaches>
        </div>

    )


}