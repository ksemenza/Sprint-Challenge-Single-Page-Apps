import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div
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
`;

export default function LocationCard(episode) {
  return (
    <CardDiv >
      <h2>{episode.name}</h2>
      <h3>Air Date: {episode.air_date}</h3>
      <h3>Episode: {episode.episode}</h3>
      <h3>Created: {episode.created}</h3>
      <h3>Number of Characters: {episode.characters.length}</h3>
    </CardDiv>
  );
}
