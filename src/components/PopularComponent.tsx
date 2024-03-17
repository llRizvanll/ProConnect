import { View, StyleSheet, Image } from "react-native";
import { Text, Title } from "react-native-paper";
import { SectionGrid } from 'react-native-super-grid';
import { colors } from "../../assets/colors";
import { AppConstants } from "../utility/AppConstants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
    },
    title: {
        color: colors.black,
        marginBottom: 10,
        marginLeft:10,
        fontFamily: AppConstants.fontFamily,
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
});

const data = [
    { title: 'Section 1', data: [
        { id: '1', uri: 'https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg' },
        { id: '2', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '3', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '4', uri: 'https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg' },
        { id: '5', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    ]},
    { title: 'Section 2', data: [
        { id: '6', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '7', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '8', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '9', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '10', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    ]},
    { title: 'Section 3', data: [
        { id: '11', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '12', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '13', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '14', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
        { id: '15', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    ]},
    // ... other sections ...
];

const PopularComponent = () => {
    return (
        <View style={styles.container}>
            <SectionGrid
              itemDimension={130}
              sections={data}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.uri }} style={styles.imageStyle} />
                </View>
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.title}>{section.title}</Text>
              )}
            />
        </View>
    );
};

export default PopularComponent;