import React from "react";
import { Card } from "react-bootstrap";
import "../../../../styles/character-list.scss";

export default class NameCard extends React.Component {
  render() {
    return (
      <Card.Body>
        <Card.Title className="title-name">{this.props.name}</Card.Title>
      </Card.Body>
    );
  }
}
