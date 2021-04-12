import React from 'react'
import styled from 'styled-components'
import Astromatch from '../img/Astromatch.png'

const HeaderComponent = styled.div`
    padding-top: 50px;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
`

function Header  () {
return (
    <HeaderComponent>
        <img src = {Astromatch}/>
    </HeaderComponent>
 
)
}
export default Header