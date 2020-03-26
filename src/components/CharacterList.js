import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import axios from 'axios'
import styled from "styled-components";

const CardsWrap = styled.div `
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: stretch;
justify-items: center;
`
const SearchWrap = styled.div `
padding:1.5rem;
display:flex;
justify-content:center;

input {
  padding-left:1.5rem;
  padding-right:1.5rem;
  padding-top:0.5rem;
  padding-bottom:0.5rem;
  text-align: center;
  border: 1px dashed lime;
}

`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res)
    
      const searchQuery = res.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(searchQuery);


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
        <SearchWrap>
    <SearchForm handleChange={handleChange} searchTerm={searchTerm}/>
    </SearchWrap>
  <CardsWrap>
      {searchResults.map(character => {
          console.log(character)
        return <CharacterCard character={character} key={character.key} name={character.name} gender={character.gender} image={character.image} species={character.species}/>

      })}
      </CardsWrap>
    </section>
  );
}
