import React from "react";
import { Card, Col } from "react-bootstrap";
import ImageCard from "./ImageCard/ImageCard";
import NameCard from "./NameCard/NameCard";
import ListCard from "./ListCard/ListCard";

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
