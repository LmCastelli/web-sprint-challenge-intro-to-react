// Imports //

import React, {useState, useEffect} from 'react';
import Character from './components/Character'
import Details from './components/Details'
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

// Styling the MainDiv //

const MainDiv = styled.div`
  width: 100%;
  /* background-color: black; */
  color: white;
  border: 1px solid black;
  text-align: center;
  font-size: larger;
  opacity: .9;
`
// Initializing what selects the chosen character to properly display info
const App = () => {
  const [characters, setChar] = useState([]);
  const [featuredCharacter, setFeatured] = useState(null)

// Function to select character index or to remove the details window
  const pickCharacter = idx => {
    setFeatured(idx)
  }

  const closeCharacter = () => {
    setFeatured(null)
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Grabbing the data
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setChar(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  // Returning what gets attached to the root. Basically an h1, all the characters, and then the details of chosen character
  return (
    <MainDiv>
      <h1 className="Header">Star Wars Characters</h1>
    {
      characters.map((char, idx) => {
        // Due to res.data making Luke (first character) have ...people/1 as his api, had to increase idx by 1 to account for 0 based index
        return <Character key ={idx} idx={(idx + 1)} action={pickCharacter} info={char} />
      })
    }
    {
      featuredCharacter && <Details characterIndex={featuredCharacter} close={closeCharacter} />
    }

    </MainDiv>
  );
}

export default App;
