import React from "react";
import styled from "styled-components";

const MainWrap = styled.section `
display:flex;
justify-content:center;

img {
  margin-left:0.5rem;
  margin-top:0.5rem;
  width:25rem;
  padding:2.5rem;
  border: 5px dotted lime;

}
`

export default function WelcomePage() {
  return (
    <MainWrap className="welcome-page" >
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </MainWrap>
  );
}
