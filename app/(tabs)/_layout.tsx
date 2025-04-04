import { Tabs } from "expo-router";
import { Image, View, Text, StyleSheet, LogBox, Vibration } from 'react-native';
import DateText from '../components/DateText';

LogBox.ignoreAllLogs(true);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#282946",
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#282946",
          height: 110, // Increase the height of the tab bar
          borderTopWidth: 3, // Make the top border thicker
          borderTopColor: '#282946',
        },
        tabBarActiveTintColor: 'white', // Active tab text color
        tabBarInactiveTintColor: 'white', // Inactive tab text color
        tabBarLabelStyle: {
          fontSize: 15, // Font size of the tab label
          marginTop: 8, // Adjust the placement of the label
        },
        tabBarIconStyle: {
          marginTop: 8, // Move the icon up
        },
        tabBarItemStyle: {
          marginTop: 8, // Move the entire tab item (icon + label) up
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Dopamine Detox</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text>
                  <DateText/>     {/* Display the current date from DateText component */}
                </Text>
              </View>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/images/home-fill.png') : require('../../assets/images/home-outline.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen 
        name="settings" 
        options={{
            headerTitle: () => (
                <View style={styles.headerContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.settTitleText}>Settings</Text>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>        </Text>
                    </View>
                </View>
              ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/images/settings-fill.png') : require('../../assets/images/settings-outline.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
          tabBarLabel: "Settings", 
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '100%',
    height: 200,
  },
  titleContainer: {
    alignItems: 'flex-start',
    maxWidth: '60%',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
  dateContainer: {
    alignItems: 'flex-end',
    width: '40%',
  },
  dateText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'right', // Align text to the right
  },
  //settings title
  settTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'left', // Align text to the left
    marginLeft: -38,
    marginTop: -40,
  },
});