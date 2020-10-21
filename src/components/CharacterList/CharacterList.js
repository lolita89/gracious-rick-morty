import React from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard/CharacterCard";
import { Row } from "react-bootstrap";
import "../../styles/character-list.scss";


export default class CharacterList extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        const characters = res.data.results;
        this.setState({ characters });
        console.log("RESPONSES", this.state.characters);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Row>
        {this.state.characters.map((chars, id) => {
          return <CharacterCard key={id} chars={chars} />;
        })}
      </Row>
    );
  }
}
