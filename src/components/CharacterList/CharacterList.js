import React from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard/CharacterCard";
import CharacterSearch from "./CharacterSearch/CharacterSearch";
import { Container, Row } from "react-bootstrap";
import "../../styles/character-list.scss";

export default class CharacterList extends React.Component {
  state = {
    characters: [],
    filter: "",
  };

  componentDidMount() {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        const characters = res.data.results;
        this.setState({ characters });
        // console.log("DATA", characters);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInput = (e) => {
    console.log("type", e.target.value);
    this.setState({ filter: e.target.value });
  };

  render() {
    let characterSearch = <CharacterSearch handleInput={this.handleInput} />;

    let filteredCharacters = this.state.characters.filter((char) => {
      return char.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });

    let characterCards = filteredCharacters.map((chars, id) => {
      return <CharacterCard key={id} chars={chars} />;
    });

    return (
      <Container>
        <Row>{characterSearch}</Row>
        <Row>{characterCards}</Row>
      </Container>
    );
  }
}
