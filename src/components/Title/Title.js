import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/title.scss";

export default class RickAndMortyPage extends React.Component {
  state = {
    title: 'Welcome to Gracious Rick and Morty La La Land',
  };

  render() {
    return (
      <Container>
        <h2 className="main-title">{this.state.title}</h2>
      </Container>
    );
  }
}