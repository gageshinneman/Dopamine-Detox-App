import React from 'react';
import { Image, Text, ScrollView, View, StyleSheet } from "react-native";
import { checkUserApps } from '../utils/checkUserApps';

interface ImpactAppScrollProps {
  impact: 'low' | 'medium' | 'high';
}

const lowImpactImages = [
  require('../../assets/images/home-outline.png'),  //low impact app icons go here
];

const mediumImpactImages = [
  require('../../assets/images/home-outline.png'),  //low impact app icons go here
];

const highImpactImages = [
  require('../../assets/images/home-outline.png'),  //low impact app icons go here
  require('../../assets/images/home-outline.png'),
];

export default function ImpactAppScroll({ impact }: ImpactAppScrollProps) {
    let imagesToRender;

    switch (impact) {
      case 'low':
        imagesToRender = lowImpactImages;
        break;
      case 'medium':
        imagesToRender = mediumImpactImages;
        break;
      case 'high':
        imagesToRender = highImpactImages;
        break;
      default:
        imagesToRender = [];
    }

    return (
    <View style={styles.scrollViewWrapper}>
        <ScrollView
          contentContainerStyle={styles.horScrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {imagesToRender.map((imageSource, index) => (
          <Image
            key={index}
            source={imageSource}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          ))}
        </ScrollView>
      </View>
    );
}


const styles = StyleSheet.create({
    scrollViewWrapper: {
        height: 40, // Set a fixed height for the scroll view wrapper
        width: '100%',
        marginBottom: 0,
        marginTop: 0,
        justifyContent: 'center', // Center the scroll view vertically
      alignItems: 'center',
      },
      horScrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 0,
        width: '80%', // Ensure the horizontal scroll view takes the full width of the wrapper
        flexGrow: 1, // Allow the scroll view to grow and fill the space
        //margin: 0, // Add some space above the horizontal scroll view
        //padding: 0,
        //maxHeight: 20,
      },
});