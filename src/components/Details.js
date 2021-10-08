// File for Displaying Character info
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDetails = styled.div`
    background-color: black;
    color: white;

`

export default function Details(props) {
    const {characterIndex, close} = props
    const  [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterIndex}`)
        .then(res => {setDetails(res.data)})
        .catch(err => {console.error(err)})
    }, [characterIndex])

    return (
        <StyledDetails>
            <h2>Character Details:</h2>
            { 
                details !== null && 
                
                <>
                    <p>{details.name} is {details.mass} kilograms and {details.height} centimeters tall </p>
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}