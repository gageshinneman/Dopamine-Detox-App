import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type CustomButtonProps = {
    text: string;
}

export default function CustomButton({ text }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} 
        //onPress={() => alert('Button Pressed')}
    >
        <View style={styles.buttonBackground} />
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100%",
        minHeight: 80,
        overflow: 'hidden', // Ensure the background view doesn't overflow the button
    },
    buttonBackground: {
        ...StyleSheet.absoluteFillObject, // Fill the entire button area
        backgroundColor: "#414267",
        opacity: 0.5,
        //borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 25,
        //282946 <-- main background color
        //414267 <-- button background color
        //8384A4 <-- border color
    },
    buttonText: {
        opacity: 1, // Ensure the text is fully opaque
        color: "#efefef",
        fontSize: 25,
        fontWeight: "500",
        zIndex: 1, // Ensure the text is above the background view
    },
});