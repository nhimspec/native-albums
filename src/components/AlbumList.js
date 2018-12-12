import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: []
  };
  componentDidMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <AlbumDetail key={index} album={album} />
    ));
  }
  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
