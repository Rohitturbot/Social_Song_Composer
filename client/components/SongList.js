import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map(song => {
      return <li key={song.id}>{song.title}</li>;
    });
  }
  render() {
    // console.log(this.props.data.songs);
    if (this.props.data.loading === true) {
      return <div> loading...</div>;
    }
    return <div>{this.renderSong()}</div>;
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
