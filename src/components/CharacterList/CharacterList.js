import React from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { CharacterSearchBox, CharacterCard } from "../CharacterList";
import "../../styles/character-list.scss";

export default class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        const characters = res.data.results;
        this.setState({ characters });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    let characterSearchBox = (
      <CharacterSearchBox handleInput={this.handleInput} />
    );

    let filteredCharacters = this.state.characters.filter((char) => {
      return char.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });

    let characterCards = filteredCharacters.map((chars, id) => {
      return <CharacterCard key={id} chars={chars} />;
    });

    return (
      <Container>
        <Row>{characterSearchBox}</Row>
        <Row>{characterCards}</Row>
      </Container>
    );
  }
}
