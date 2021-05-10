import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

export default function Post() {
  const [curtido, setCurtido] = useState (false)
  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState (0)
  const [comentarios, setComentarios] = useState ([])
  // const [onClickCurtida, setOnClickCurtida] = useState(0)
  // const [onClickComentario, setOnClickComentario] = useState('')
  // const [enviarComentario, setEnviarComentario] = useState()

//   const handleOnClickCurtida = (event) => {
//     setOnClickCurtida(event.target.value)
//   }
//   const handleOnClickComentario = (event) => {
//     setOnClickComentario(event.target.value)
//   }
//   const handleEnviarComentario = (event) => {
//     setEnviarComentario(event.target.value)
//   }

// }
// const Post = (props) => {


  // const onClickCurtida = () => {
  // };

  // const onClickComentario = () => {
  // };

  // const enviarComentario = (comentario) => {
  // }

}

onClickCurtida = () => {
    if (curtido) {
    setCurtido(!curtido)
    setNumeroCurtidas(numeroCurtidas - 1)
  } else {
    setCurtido(!curtido)
    setNumeroCurtidas(numeroCurtidas + 1)
  }
}

const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

onClickComentario = () => {
 setComentando(!comentando)
}

const caixaDeComentario = comentando ? (
  <SecaoComentario enviarComentario={enviarComentario}/>
) : (
  comentarios.map(comentario => {
    return (
      <CommentContainer>
        <p>{comentario}</p>
      </CommentContainer>
    )
  })
)

enviarComentario = (comentario) => {
  const listaDeComentarios = [...comentarios, comentario]

    comentarios(listaDeComentarios)
    comentando(false)
    numeroComentarios(numeroComentarios + 1)
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
  }
}