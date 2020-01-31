import React from "react";
import { Link, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList'

export default function Header() {
  return (
    <div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>
    </nav>
    </header>

    <Route exact path='/' component={WelcomePage}/>
    <Route path='/characters' component={CharacterList}/>

    </div>
  );
}
