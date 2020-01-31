import React from "react";

export default function CharacterCard(character) {
  return (
 <div>
   <h2>{character.name}</h2>
   <h3>{character.gender}</h3>
   <h3>{character.species}</h3>
   <img src={character.image} alt={character.name}/>
 </div>
    )
}
