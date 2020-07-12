import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ title, artist, thumbnail_image, image, url }) => {
  const { albumStyle, textContainer, tinyLogo, thumbnailView } = styles;
  return (
    <>
      <Card>
        <CardSection>
          <View style={thumbnailView}>
            <Image style={tinyLogo} source={{ url: thumbnail_image }} />
          </View>
          <View style={textContainer}>
            <Text style={{ fontSize: 20 }}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={albumStyle} source={{ url: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}> BUY NOW </Button>
        </CardSection>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    height: 70,
    width: 70,
  },
  textContainer: {
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumStyle: {
    height: 400,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;