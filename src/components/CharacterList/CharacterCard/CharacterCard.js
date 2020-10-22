import React from "react";
import { Card, Col } from "react-bootstrap";
import {ImageCard, NameCard, ListCard} from "../CharacterCard";

export default class CharacterCard extends React.Component {
  render() {
    return (
      <Col sm={3}>
        <Card>
          <ImageCard image={this.props.chars.image} />
          <NameCard name={this.props.chars.name} />
          <ListCard chars={this.props.chars} />
        </Card>
      </Col>
    );
  }
}
