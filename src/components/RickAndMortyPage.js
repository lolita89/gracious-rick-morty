import React from "react";
import { Container } from "react-bootstrap";
import {Title, CharacterList} from "../components";
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
