import React from "react";
import "../../../styles/character-list.scss";

export default class CharacterSearchBox extends React.Component {
  render() {
    return (
      <input placeholder="search a character name" onChange={this.props.handleInput} type="text"/>
    );
  }
}
