import React, {useState, useEffect} from 'react';
import Character from './components/Character'
import './App.css';
import axios from 'axios';

const App = () => {
  const [characters, setChar] = useState([]);
  const [featuredCharacter, setFeatured] = useState('1')


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
    <div className="App">
      <h1 className="Header">Characters</h1>
    {
      characters.map(char => {
        return <Character key={char.name} action={pickCharacter} info={char} />
      })
    }

    </div>
  );
}

export default App;
