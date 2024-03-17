import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
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
    height: "100%",
    minHeight: 300,
    maxHeight: 400,
    borderRadius: 10, // Add this line to round the corners of the image
    borderWidth: 2, // Add this line to add a border to the image
    borderColor: "#007BFF", // Add this line to set the color of the border to blue
    shadowColor: "#000", // Add this line to set the color of the shadow to black
    shadowOffset: { width: 0, height: 2 }, // Add this line to set the offset of the shadow
    shadowOpacity: 0.25, // Add this line to set the opacity of the shadow
    shadowRadius: 3.84, // Add this line to set the radius of the shadow
    //elevation: 5, // Add this line to set the elevation of the image (Android only)
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
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    lineHeight: 20, // Add this line to make the tags look better
    padding: 10, // Add this line to create some space around the tags container
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: "IBMPlexSans-Regular",
    color: "blue", // Add this line to make the text color blue
    textAlign: "center", // Add this line to center the text
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
    backgroundColor: "#fff", // Add this line to set the background color of the modal to white
  },
  modalContent: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    maxHeight: "80%", // Add this line to set the maximum height of the modal content to 80%
  },
  closeButton: {
    marginTop: 2, // Add this line to add some space above the close button
    backgroundColor: "#007BFF", // Add this line to set the background color of the close button to blue
    padding: 10, // Add this line to add some padding around the close button
    borderRadius: 5, // Add this line to round the corners of the close button
  },
  closeButtonText: {
    color: "#fff", // Add this line to set the text color of the close button to white
  },
});

const dummyData = [
  {
    id: "1",
    title: "Item 1",
    description: "Description 1",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "2",
    title: "Item 2",
    description: "Description 2",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "3",
    title: "Item 3",
    description: "Description 3",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "4",
    title: "Item 4",
    description: "Description 4",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "5",
    title: "Item 5",
    description: "Description 5",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "6",
    title: "Item 6",
    description: "Description 6",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "7",
    title: "Item 7",
    description: "Description 7",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "8",
    title: "Item 8",
    description: "Description 8",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "9",
    title: "Item 9",
    description: "Description 9",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
  {
    id: "10",
    title: "Item 10",
    description: "Description 10",
    image:
      "https://phoenix-rise.s3.ap-south-1.amazonaws.com/engineering/17032024-image-engg-1.jpeg",
    tags: [
      "engineering",
      "technology",
      "java",
      "js",
      "ts",
      "android",
      "ios",
      "web",
      "mobile",
    ],
  },
];

const HomeComponent = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          {/* <Text style={styles.description}>{item.description}</Text> */}
          <View style={styles.tagsContainer}>
            {item.tags.map((tag: any, index: any) => (
              <Text key={index} style={styles.tag}>
                #{tag}
              </Text>
            ))}
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
      <Modal isVisible={isModalVisible} style={styles.bottomModal}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
