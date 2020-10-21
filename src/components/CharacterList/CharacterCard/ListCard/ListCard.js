import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class NameCard extends React.Component {
  render() {
    return (
      <ListGroup className="list-group-flush">
        <ListGroupItem>Location: {this.props.chars.location.name}</ListGroupItem>
        <ListGroupItem>Origin: {this.props.chars.origin.name}</ListGroupItem>
        <ListGroupItem>Episode: {this.props.chars.episode.length}</ListGroupItem>
        <ListGroupItem>Species: {this.props.chars.species}</ListGroupItem>
        <ListGroupItem>Gender: {this.props.chars.gender}</ListGroupItem>
      </ListGroup>
    );
  }
}
