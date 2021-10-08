// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid red;
    font-size: larger;

`
const Button = styled.button`
    font-size: larger;


`
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