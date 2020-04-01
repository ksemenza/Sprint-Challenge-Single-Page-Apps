import React from "react";
import styled from 'styled-components'

const CardWrap = styled.div
`
  width: 31%;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 3px 5px 3px 3px #888888;
  margin-bottom: 2rem;
  h2 {
    background: #0CB0C1;
    margin: 0;
    padding: 1rem;
    text-align: center;
    font-family: 'Architects Daughter', cursive;

  }
  h3 {
    padding-left: 1rem;
    line-height: 1.1rem;
    font-family: 'Architects Daughter', cursive;

  }
`
const ImgCta = styled.div
`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;


export default function CharacterCard(character) {
  return (
 <CardWrap>
   <h2>{character.name}</h2>
   <h3>{character.gender}</h3>
   <h3>{character.species}</h3>
   <ImgCta>
   <img src={character.image} alt={character.name}/>
   </ImgCta>
 </CardWrap>
    )
}
