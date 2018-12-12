import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends React.Component {
  render() {
    const { album } = this.props;
    const {
      headerContentStyle,
      thumbnailStyle,
      thumbnailContainerStyle,
      headerStyle,
      imageStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: album.thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerStyle}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image style={imageStyle} source={{ uri: album.image }} />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(album.url)}>Buy Now</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
