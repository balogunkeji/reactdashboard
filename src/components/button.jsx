import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid green;
    color: green;
    background-color: transparent;
    padding: 10px 25px;
    border-radius: 50px;
    position: relative;
    display: flex;
    align-items:center;
    font-size: 12px;
    outline: none;
    
    &::before{
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        background-color: green;
        border-radius: 50px;
        margin-left: 7.5px;
        top: 11.5px;
        left: 0;
        bottom: 0;
        right: 0;
    }
    `
    const Grey = styled(Button)`
    color: #c4c2c2;
    border: 1px solid #c4c2c2;

    &::before{
        background-color: #c4c2c2;
    }
`

    const Yellow = styled(Button)`
        color: yellow;
        border: 1px solid yellow;

        &::before{
            background-color: yellow;
        }
    `
function Buttons (){

    return(
        <div className='button'>
            <Button>Reconcilled</Button>
            <Yellow>Pending</Yellow>
            <Grey>Un-reconcilled</Grey>
        </div>
    )
           
}

export default Buttons;