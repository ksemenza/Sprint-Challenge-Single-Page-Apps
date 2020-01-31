import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';
import axios from 'axios';

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


export default function EpisodeList() {

    const [searchTermEsp, setsearchTermEsp] = useState('');
    const [searchResultsEsp, setsearchResultsEsp] = useState([]);  
    // const [episodeCharacter, setEpisodeCharacter]

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
          .then(res => {
            console.log(res.data.results);
            const searchQuery = res.data.results.filter(episode => episode.name.toLowerCase().includes(searchTermEsp.toLowerCase()));
            const charcEps = res.data.results.characters;
            console.log(charcEps)
            setsearchResultsEsp(searchQuery);
          })
          .catch(err => {
            console.error('episode data', err); 
          })
      
      }, [searchTermEsp]);

      const handleChange = e => {
        setsearchTermEsp(e.target.value)
      }
    

      return (
        <section className="character-list">
       <SearchWrap>
    <SearchForm handleChange={handleChange} searchTerm={searchTermEsp}/>
    </SearchWrap>
  <CardsWrap>
      {searchResultsEsp.map(episode => {
        return <EpisodeCard episode={episode} key={episode.key} name={episode.name} air_date={episode.air_date} episode={episode.episode} created={episode.created} characters={episode.characters}/>
      })}
      </CardsWrap>
        </section>
      );
    
    

      }
    

