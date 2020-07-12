import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

class AlbumList extends Component {
  state = {
    albums: [],
  };


  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <>
        <AlbumDetail
          key={album.url}
          title={album.title}
          artist={album.artist}
          thumbnail_image={album.thumbnail_image}
          image={album.image}
          url={album.url}
        />
      </>
    )
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
