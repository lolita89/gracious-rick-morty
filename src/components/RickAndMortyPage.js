import React from "react";
//children components
import Title from "./Title/Title";
import CharacterList from "./CharacterList/CharacterList";

import { Container } from "react-bootstrap";
import "../styles/rickandmorty-page.scss";

export default class RickAndMortyPage extends React.Component {
  render() {
    return (
      <section className="main-page">
        <Container>
          <Title />
          <CharacterList />
        </Container>
      </section>
    );
  }
}
