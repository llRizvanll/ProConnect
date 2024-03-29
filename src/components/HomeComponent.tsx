import {
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { Text, Divider, Chip } from "react-native-paper";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { format } from "date-fns";
import { HomeComponentStyles as styles } from "../styles/HomeComponentStyles";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { setBookmark } from "../app/slices/bookmarkSlice";
import { persistedStorage } from "../app/mmkv";

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

  const dispatch = useAppDispatch();

  const saveToBookMark = async (item) => {
    dispatch(
      setBookmark({
        bookmarks: bookmarkState.bookmarks.concat(item.title),
        userId: "newUserId",
        deviceId: "newDeviceId",
        bookmarkType: "newBookmarkType",
      })
    );

    // Get the saved bookmarks from storage
    const savedBookmarksString = await persistedStorage.getItem('bookmarks');
    const savedBookmarks = savedBookmarksString ? JSON.parse(savedBookmarksString) : null;
    //console.log('savedBookmarks', savedBookmarks, ' -- ', persistedStorage.containsKey('bookmarks'));
  };

  const bookmarkState = useAppSelector(
    (state: RootState) => state.bookmarkSlice
  );

  // Now you can access the properties of the bookmark state
  console.log(bookmarkState.bookmarks);
  console.log(bookmarkState.userId);
  console.log(bookmarkState.deviceId);
  console.log(bookmarkState.bookmarkType);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleInfoPress = (item) => {
    Alert.alert("Source Info", `Source of the message: ${item.title}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text style={styles.timestamp}>
          {" Bengaluru, " +
            format(new Date(), "h.mm a,  dd MMM yy").toLocaleLowerCase()}
        </Text>
        <TouchableOpacity
          onPress={() => handleInfoPress(item)}
          style={{ marginRight: 4 }}
        >
          <Icon name="info" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <View>
          {/* <Text style={styles.description}>{item.description}</Text> */}
          <View style={styles.tagsContainer}>
            {item.tags.map((tag: any, index: any) => (
              <Chip key={index} style={styles.tag}>
                #{tag}
              </Chip>
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
            <Icon
              name="bookmark"
              size={30}
              color="#000"
              onPress={() => {
                saveToBookMark(item);
              }}
            />
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
