import React from "react";
import "../../../styles/character-list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class CharacterSearchBox extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          className="input-text"
          placeholder="search a character name"
          onChange={this.props.handleInput}
          type="text"
        />
      </div>
    );
  }
}
