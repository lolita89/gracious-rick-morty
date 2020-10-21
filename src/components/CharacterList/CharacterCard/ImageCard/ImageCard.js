import React from "react";
import { Card } from "react-bootstrap";

export default class ImageCard extends React.Component {
  render() {
    return <Card.Img variant="top" src={this.props.image} />;
  }
}
