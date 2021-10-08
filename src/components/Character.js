// Write your Character component here
import React from "react";
import styled from "styled-components";

// Styling div for each character

const StyledCharacter = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: larger;
    margin-left: 5%;
    opacity: 1;
`

// Styling the buttons

const Button = styled.button`
    font-size: larger;
    background-color: black;
    border: 1px solid black;
    color: white;
    text-shadow: 1px 1px 5px rgb(100, 99, 89);
`

// Exporting the divs that have character name and the button that calls for details 
export default function Character({info, action, idx}) {
    return (
        <StyledCharacter>
            {info.name}
            
            <Button onClick={() => action(idx)}>
                Details
            </Button>
        </StyledCharacter>
    )
}