import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Settings() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.buttonsContainer}>
                <CustomButton text="Set Apps"/>
                <CustomButton text="Categorize Apps"/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282946',
    },
    text: {
        color: 'white',
    },
    buttonsContainer: {
        paddingTop: 80,
        flexDirection: "column",
        maxWidth: "80%",
        justifyContent: "flex-start",
    },
    scrollContainer: {
        minWidth: "100%",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
})