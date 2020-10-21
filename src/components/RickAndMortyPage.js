import React from "react";
//children components
import Title from "./Title/Title";
import CharacterList from "./CharacterList/CharacterList";

import { Container } from "react-bootstrap";
import "../styles/character-list.scss";


export default class RickAndMortyPage extends React.Component {
  state = {
  };

  render() {
    return (
      <section className="character-list">
        <Container>
            <Title/>
            <CharacterList/>
        </Container>
      </section>
    );
  }
}
