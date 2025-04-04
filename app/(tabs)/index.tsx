import { Link } from "expo-router";
import { Image, Text, ScrollView, View, StyleSheet, LogBox } from "react-native";
import { Button } from '@rneui/themed';
import CustomButton from '../components/CustomButton';
import ImpactSection from '../components/ImpactSection';
import { BlurView } from 'expo-blur';

LogBox.ignoreAllLogs(true);

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.buttonsContainer}>
          <ImpactSection/>
          <CustomButton text="Set Category Limits"/>
          <CustomButton text="Start Detox"/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282946",
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: "column",
    maxWidth: "80%",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    minWidth: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});