import React from 'react';
import { Text, StyleSheet, LogBox } from 'react-native';

const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
};

const DateText = () => {
    return (
      <Text style={styles.dateText}>{getCurrentDate()}</Text>
    );
};

const styles = StyleSheet.create({
    dateText: {
        color: 'white',
        fontSize: 35,
        textAlign: 'right', // Align text to the right
    },
});
  
export default DateText;