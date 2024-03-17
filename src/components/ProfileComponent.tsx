import { View, StyleSheet, FlatList, Linking } from "react-native";
import { Text, List } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    // add your title styles here
  },
});

const options = [
  { id: "1", title: "Option 1", link: "https://example.com/option1" },
  { id: "2", title: "Option 2", link: "https://example.com/option2" },
  // ... other options ...
];

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            onPress={() => Linking.openURL(item.link)}
            right={() => <Icon name="arrow-right" size={26} color="black" />}
          />
        )}
      />
    </View>
  );
};

export default ProfileComponent;
