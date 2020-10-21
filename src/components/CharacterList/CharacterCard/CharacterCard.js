import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Col,
} from "react-bootstrap";
import "../../../styles/character-card.scss";

export default function CharacterCard(props) {
  return (
      <Col sm={3} className="card-column">
        <Card>
          <Card.Img variant="top" src={props.chars.image} />
          <Card.Body>
            <Card.Title className="title-name">{props.chars.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Location: {props.chars.location.name}</ListGroupItem>
            <ListGroupItem>Origin: {props.chars.origin.name}</ListGroupItem>
            <ListGroupItem>Episode: {props.chars.episode.length}</ListGroupItem>
            <ListGroupItem>Species: {props.chars.species}</ListGroupItem>
            <ListGroupItem>Gender: {props.chars.gender}</ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
  );
}
