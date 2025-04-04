import React from 'react';
import { Image, Text, ScrollView, Platform, View, StyleSheet, LogBox } from "react-native";
import { Button } from '@rneui/themed';
import ImpactAppScroll from './ImpactAppScroll';
import { checkInstalledApps } from "expo-check-installed-apps";

export default function ImpactSection() {
  const packageNames: string[] =
  Platform.select({
    android: ["com.google.android.apps.fitness", "com.android.chrome"], // Use package name of android apps
    ios: ["fb://", "shareddocuments://"], // Use proper url scheme of ios apps
  }) || [];

checkInstalledApps(packageNames)
  .then((installedApps) => {
    console.log(installedApps);
  })
  .catch((error) => {
    console.error("Error checking installed apps:", error);
  });

  return (
    <View style={styles.impactsContainer}>
      <Button
        loading={false}
        buttonStyle={styles.iButtonStyle}
        onPress={() => console.log('aye')}
        // style={styles.buttonStyle} 
      >
        <Text style={styles.impactText}>
          High Impact:             
        </Text>
        <Text style={styles.highAddMoreText}>
          + Add More             
        </Text>
      </Button>
      <Text>
        <ImpactAppScroll impact="high"/>   {/* This is the horizontal scroll view of apps */}
      </Text>
      <Button
        loading={false}
        buttonStyle={styles.iButtonStyle}
        onPress={() => console.log('aye')}
      >
        <Text style={styles.impactText}>
          Medium Impact:
        </Text>
        <Text style={styles.medAddMoreText}>
          + Add More             
        </Text>
      </Button>
      <Text>
        <ImpactAppScroll impact="medium"/>  {/* This is the horizontal scroll view of apps */}
      </Text>
      <Button
        loading={false}
        buttonStyle={styles.iButtonStyle}
        onPress={() => console.log('aye')}
      >
        <Text style={styles.impactText}>
          Low Impact:
        </Text>
        <Text style={styles.lowAddMoreText}>
          + Add More             
        </Text>
      </Button>
      <Text>
        <ImpactAppScroll impact="low"/>  {/* This is the horizontal scroll view of apps */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iButtonStyle: {
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 25,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minWidth: "100%",
    minHeight: 30,
    overflow: 'hidden',
    backgroundColor: "#282946", // Button background color
  },
  impactText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  highAddMoreText: {
    marginLeft: 102,
    marginTop: 1,
    color: "#fff",
    fontWeight: "400",
    fontSize: 12,
    borderWidth: 0,
    borderColor: "#fff", 
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#414267", // Background color for the + Add More text
  },
  medAddMoreText: {
    marginLeft: 69,
    marginTop: 1,
    color: "#fff",
    fontWeight: "400",
    fontSize: 12,
    borderWidth: 0,
    borderColor: "#fff", 
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#414267", // Background color for the + Add More text
  },
  lowAddMoreText: {
    marginLeft: 105,
    marginTop: 1,
    color: "#fff",
    fontWeight: "400",
    fontSize: 12,
    borderWidth: 0,
    borderColor: "#fff", 
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#414267", // Background color for the + Add More text
  },
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
  scrollItem: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  impactsContainer: {
    marginBottom: 16,
  }
});