import { View, StyleSheet, Image } from "react-native";
import { Text, Title } from "react-native-paper";
import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2B33',
        padding: 10,
    },
    title: {
        color: '#fff',
        marginBottom: 10,
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
    { id: '1', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '2', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '3', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '4', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '5', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '6', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '7', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '8', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '9', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '10', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '11', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '12', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '13', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '14', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '15', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '16', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '17', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '18', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '19', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    { id: '20', uri: 'https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png' },
    // ... other items ...
  ];

const SettingsComponent = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>Bookmarks</Title>
            <FlatGrid
              itemDimension={130}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.uri }} style={styles.imageStyle} />
                </View>
              )}
            />
        </View>
    );
};

export default SettingsComponent;