import React from 'react';
import styled from 'styled-components';

const DivAnswer = styled.div`
    /* margin: auto; */
    width: 50px;
    border: 1px solid black;
    margin-top: 500px;
`

class ScreenUser extends React.Component{

    render(){
       
        return(
            <DivAnswer>
               {this.props.name}
            </DivAnswer>
        )
    }
}


export default ScreenUser;