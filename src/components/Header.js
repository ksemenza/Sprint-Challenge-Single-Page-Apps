import React from "react";
import { Link, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList'
import LocationList from './LocationsList'
import EpisodeList from './EpisodeList'

import styled from 'styled-components'
export default function Header() {


  const HeaderWrap = styled.div `
  border: 3px groove #0CB0C1;
  display: flex;
  width:100%;
  color:#0CB0C1;
  background: black;
  font-family: 'Architects Daughter', cursive;

  a {
   text-decoration:none;
   padding:1.0rem;
   font-size:1.5rem;
   color:black;
  }

  nav {
    border: 2px inset black;
    display:flex;
    justify-content:space-around;
    background:#0CB0C1;
  }

  header {
    width:100%;
  }

  `


  return (
    <div>
    <HeaderWrap>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/location'>Location</Link>
      <Link to='/episode'>Episode</Link>
    </nav>
    </header>
    </HeaderWrap>
    <Route exact path='/' component={WelcomePage}/>
    <Route path='/characters' component={CharacterList}/>
    <Route path='/location' component={LocationList}/>
    <Route path='/episode' component={EpisodeList}/>
</div>

  );
}
