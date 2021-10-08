// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid red; */
    font-size: larger;
    margin-left: 5%;
    opacity: 1;

`
const Button = styled.button`
    font-size: larger;
    background-color: black;
    border: 1px solid black;
    color: white;
    text-shadow: 1px 1px 5px rgb(100, 99, 89);


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