import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <div>
      <Header />  
      <AppContainer>
        
        <Home />
      </AppContainer>
      </div>
      
    
  )

  
}