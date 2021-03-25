import React from 'react';
import styled from 'styled-components';

const DivFeedback = styled.div`
    width: 200px;
    border: 1px solid black;
    margin-top: 500px;
`

class UserScreen extends React.Component{

    render(){
       
        return(
            <DivFeedback>
               {this.props.name}
            </DivFeedback>
        )
    }
}


export default UserScreen;