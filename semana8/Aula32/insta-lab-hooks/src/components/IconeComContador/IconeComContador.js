import React, {useState} from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

export default function IconeComContador() {
	const [valorContador, setValorContador] = useState(0)

	const handleValorContador = (event) => {
		setValorContador(event.target.value)
	}

	return (<IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={handleValorContador}/>
		<p>{valorContador}</p>
	</IconeContainer>
	);
}

