import React, {useState, useEffect} from 'react';
import Character from './components/Character'
import Details from './components/Details'
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  border: 1px solid black;
  text-align: center;
  font-size: larger;
  opacity: .9;

`

const App = () => {
  const [characters, setChar] = useState([]);
  const [featuredCharacter, setFeatured] = useState(null)


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

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setChar(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <MainDiv>
      <h1 className="Header">Star Wars Characters</h1>
    {
      characters.map((char, idx) => {
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
