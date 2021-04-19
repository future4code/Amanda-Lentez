import React from 'react';
import styled from 'styled-components';

const DivFeedback = styled.div`
    width: 300px;
    margin-top: 50px;
    margin-left: 50px;
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