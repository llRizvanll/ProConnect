import { View, StyleSheet, FlatList, Linking } from "react-native";
import { Text, List, Appbar, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../assets/colors";
import { AppConstants } from "../utility/AppConstants";



const options = [
  { id: "1", title: "Profile change", link: "https://example.com/option1" },
  { id: "2", title: "Account settings", link: "https://example.com/option2" },
  // ... other options ...
];

const ProfileComponent = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleStyle: {
      // add your title styles here
      fontFamily: AppConstants.fontFamily,
      fontSize: 24,
    },
    appBar: {
      backgroundColor: colors.primary, // change to your preferred color
    },
    appBarTitle: {
      color: '#ffffff', // change to your preferred color
    },
  });

  const ListItemComponent = ({ item }) => (
    <View>
      <List.Item
        title={item.title}
        onPress={() => Linking.openURL(item.link)}
        right={() => <Icon name="arrow-right" size={26} color="black" />}
      />
      <Divider />
    </View>
  );
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Settings" titleStyle={styles.appBarTitle} />
      </Appbar.Header>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItemComponent item={item} />}
      />
    </View>
  );
};

export default ProfileComponent;