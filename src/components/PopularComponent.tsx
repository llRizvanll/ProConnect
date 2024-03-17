import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        // add your container styles here
        backgroundColor: '1C2B33',
    },
    title: {
        // add your title styles here
    },
});

const PopularComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
        </View>
    );
};

export default PopularComponent;