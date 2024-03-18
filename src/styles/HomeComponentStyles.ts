import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const HomeComponentStyles = StyleSheet.create({
    container: {
      backgroundColor: colors._E9EBEE,
    },
    itemContainer: {
      flex: 1,
      backgroundColor: "#ffffff",
      padding: 3,
      elevation: 2, // for Android
    },
    image: {
      flex: 1,
      width: "100%",
      height: "100%",
      minHeight: 300,
      maxHeight: 400,
      //borderRadius: 10, // Add this line to round the corners of the image
      borderWidth: 2, // Add this line to add a border to the image
      //borderColor: "#007BFF", // Add this line to set the color of the border to blue
      shadowColor: "#000", // Add this line to set the color of the shadow to black
      shadowOffset: { width: 0, height: 2 }, // Add this line to set the offset of the shadow
      //shadowOpacity: 0.25, // Add this line to set the opacity of the shadow
      //shadowRadius: 3.84, // Add this line to set the radius of the shadow
      //elevation: 5, // Add this line to set the elevation of the image (Android only)
    },
    textContainer: {
      flex: 1,
      padding: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sharebtn: {
      alignSelf: "flex-end",
      backgroundColor: colors.shareButtonBackground,
    },
    title: {
      fontSize: 24,
      padding: 5,
      marginLeft:10,
      fontFamily: "IBMPlexSans-Regular",
      alignItems: "center",
    },
    description: {
      fontSize: 14,
      fontFamily: "IBMPlexSans-Regular",
    },
    tagsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      lineHeight: 20, // Add this line to make the tags look better
      padding: 6, // Add this line to create some space around the tags container
    },
    tag: {
      marginRight: 5,
      marginBottom: 6,
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
    iconContainer: {
      flexDirection: "row", // Arrange the icons in a row
      justifyContent: "space-around", // Add space between the icons
      marginTop: 2, // Add some space above the icons
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: "#000", // Change this to the color you want for the divider
    },
    timestamp: {
      fontSize: 14,
      color: "#000", // Change this to the color you want for the timestamp
      textAlign: "left", // Center the timestamp
      marginTop: 10, // Add some space above the timestamp
      marginLeft:10,
    },
  });

  