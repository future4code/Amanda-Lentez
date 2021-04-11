import styled from 'styled-components';
import Appcss from '../App.css'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  /* max-width: 1200px; */
  flex-wrap: wrap;
  z-index: 1;
  margin: auto;
`

//card matches //
export const CardMaches = styled.div`
  width: 300px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  /* overflow: scroll; */
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
`


//card home //
export const CardHome = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
`

////perfis //

export const ProfileMatches = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
`
export const ProfileHome = styled.div`
  margin: auto;
  width: 100%;
`
export const Main = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10vh;
  cursor: pointer;
`

export const BoxChoice = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`

export const ListaMaches = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

export const ProfileBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
`

export const ImageSet = styled.img`
  &:hover{
    width: 300px;
    height: 300px;
  }
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
`