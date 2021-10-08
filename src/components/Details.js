// File for Displaying Character info
import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDetails = styled.div`
    background-color: black;
    color: #FFE81F;
    text-shadow: 1px 1px 5px rgb(100, 99, 89);
    opacity: 1;
`

export default function Details(props) {
    const {characterIndex, close} = props
    const  [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterIndex}`)
        .then(res => {setDetails(res.data)})
        .catch(err => {console.error(err)})
    }, [characterIndex])

    const srcObj = {
    "Luke Skywalker" : "https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2021%2F01%2FLuke-Skywalker-Return-of-the-Jedi-850x560.jpg",
    "C-3PO" : "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
    "R2-D2" : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/07/1487160686-r2-d2.jpg?resize=768:*",
    "Darth Vader" : "https://i.guim.co.uk/img/media/0318cf958ab0d6dbfc1d8a52c181532c9e81481a/87_0_1618_971/master/1618.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6018293cd294f3b2e24b16e0badaf17f",
    "Leia Organa" : "https://static.wikia.nocookie.net/fictupedia/images/1/1d/Leia-princess-leia-organa-solo-skywalker-9301321-576-1010.jpg/revision/latest/scale-to-width-down/180?cb=20170120065805",
    "Owen Lars" : "https://static.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg/revision/latest/scale-to-width-down/700?cb=20120428164235"
    }

    const CloseButton = styled.button`
        font-size: larger;
        background-color: black;
        border: 1px solid black;
        color: white;
        text-shadow: 1px 1px 5px rgb(100, 99, 89);
    `
    return (
        <StyledDetails>
            <h2>Character Details:</h2>
            { 
                details !== null && 
                
                <>
                    <h2>{details.name}</h2>
                    <p>Birth Year: {details.birth_year}</p>
                    <p>Gender: {details.gender}</p>
                    <p>Height: {details.height}cm</p>
                    <p>Mass: {details.mass}kg</p>
                    <p>Eye Color: {details.eye_color}</p>
                    <p>Hair: {details.hair_color}</p>
                    
                </>
            }
            <CloseButton onClick={close}>Close</CloseButton>
        </StyledDetails>
    )
}