import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "../../../styles/character-list.scss";


export default class CharacterSearch extends React.Component {
  state = {
  };

  render() {
    return (
      <input onChange={this.props.handleInput} type="text"/>
    );
  }
}
