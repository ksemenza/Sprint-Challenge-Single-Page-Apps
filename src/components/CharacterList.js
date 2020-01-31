import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results)
      const characterData = res.data.results;
      setCharacter(characterData);

    })
    .catch(err => {
      console.error('charc data', err); 
    })

  }, []);

  return (
    <section className="character-list">
        {/* TODO: `array.map()` over your state here! */}
      <h2></h2>
      {characters.map(character => {
        return <CharacterCard key={character.key} name={character.name} gender={character.gender} image={character.image} species={character.species}/>
      })}
    </section>
  );
}
