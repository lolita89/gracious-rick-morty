import React from "react";
import { Card } from "react-bootstrap";
import "../../../../styles/character-list.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class NameCard extends React.Component {
  render() {

    function handleClick(e) {
        window.location.href=`https://www.youtube.com/results?search_query=${e.target.innerHTML}%20rick%20and%20morty`;
      }

    return (
      <Card.Body>
        <Card.Title href="#" className="title-name" onClick={handleClick}>{this.props.name}</Card.Title>
        <FontAwesomeIcon icon="check-square"/>
      </Card.Body>
    );
  }
}
