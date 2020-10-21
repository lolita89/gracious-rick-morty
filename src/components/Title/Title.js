import React from "react";

export default class RickAndMortyPage extends React.Component {
  state = {
    title: 'Welcome to Gracious Rick and Morty La La Land',
  };

  render() {
    return (
        <h2>{this.state.title}</h2>
    );
  }
}
