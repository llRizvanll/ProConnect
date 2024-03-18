import {
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { Text, Divider } from "react-native-paper";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { format } from 'date-fns';
import { HomeComponentStyles as styles} from "../styles/HomeComponentStyles";


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
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.timestamp}>
      {format(new Date(), 'h.mm a , dd MMM yy').toLocaleLowerCase()}
    </Text>
      <View style={styles.textContainer}>
        <View>
          {/* <Text style={styles.description}>{item.description}</Text> */}
          <View style={styles.tagsContainer}>
            {item.tags.map((tag: any, index: any) => (
              <Text key={index} style={styles.tag}>
                #{tag}
              </Text>
            ))}
          </View>

          <View style={styles.iconContainer}>
            <Icon
              name="facebook"
              size={30}
              color="#000"
              onPress={() => {
                Alert.alert("ICON ", "Message clicked ");
              }}
            />
            
            <Icon name="twitter" size={30} color="#000" />
            <Icon name="bookmark" size={30} color="#000" />
            <Icon name="heart" size={30} color="#000" />
            <Icon name="share-2" size={30} color="#000" />
          </View>
        </View>
      </View>
      <Divider />
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

        // ItemSeparatorComponent={() => (
        //   <View style={styles.separator} />
        // )}
      />
    </View>
  );
};

export default HomeComponent;
