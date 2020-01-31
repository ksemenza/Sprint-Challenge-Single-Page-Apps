import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results)
      const characterData = res.data.results;
      const searchQuery = res.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(searchQuery);
      setCharacter(characterData);

    })
    .catch(err => {
      console.error('charc data', err); 
    })

  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <section className="character-list">
        {/* TODO: `array.map()` over your state here! */}
      <SearchForm handleChange={handleChange} searchTerm={searchTerm}/>
  
      {searchResults.map(character => {
        return <CharacterCard character={character} key={character.key} name={character.name} gender={character.gender} image={character.image} species={character.species}/>
      })}
    </section>
  );
}
