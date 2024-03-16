import { View, StyleSheet, FlatList, Image, Button } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import { colors } from "../../assets/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors._E9EBEE,
  },
  itemContainer: {
    flexDirection: "column",
    margin: 8,
    backgroundColor: colors.white,
    borderRadius: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    elevation: 4, // for Android
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 2,
  },
  textContainer: {
    flex: 0.5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sharebtn: {
    alignSelf: "flex-end",
    backgroundColor: colors.shareButtonBackground,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "IBMPlexSans-Regular",
  },
  description: {
    fontSize: 14,
    fontFamily: "IBMPlexSans-Regular",
  },
});

const dummyData = [
  {
    id: "1",
    title: "Item 1",
    description: "Description 1",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "2",
    title: "Item 2",
    description: "Description 2",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "3",
    title: "Item 3",
    description: "Description 3",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "4",
    title: "Item 4",
    description: "Description 4",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "5",
    title: "Item 5",
    description: "Description 5",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "6",
    title: "Item 6",
    description: "Description 6",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "7",
    title: "Item 7",
    description: "Description 7",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "8",
    title: "Item 8",
    description: "Description 8",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "9",
    title: "Item 9",
    description: "Description 9",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
  {
    id: "10",
    title: "Item 10",
    description: "Description 10",
    image:
      "https://dailyremote.com/assets/6ca601a8-fbc5-4a64-9d23-1ec9c9305ed1.png",
  },
];

const HomeComponent = () => {
  const renderItem = ({ item  }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.sharebtn}>
          <Button
            title="Share"
            color={colors.shareButtonBackground}
            onPress={() => {
              /* add your share functionality here */
            }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeComponent;
