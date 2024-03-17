import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Text, Appbar, Card, FAB } from "react-native-paper";
import { TextInput as PaperTextInput } from 'react-native-paper';
import { colors } from "../../assets/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue100,
  },
  appBar: {
    backgroundColor: colors.primary, // change to your preferred color
  },
  appBarTitle: {
    color: colors.white, // change to your preferred color
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    color: 'white', // add this line
  },
  fab: {
    margin: 16,
  },
  card: {
    marginVertical: 10,
  },
});

const ChatComponent = () => {
  // ... other code ...
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Chat" titleStyle={styles.appBarTitle} />
      </Appbar.Header>
      <ScrollView style={styles.chatContainer}>
        {/* Here you can map through your messages and display them */}
        <Card style={styles.card}>
          <Card.Content>
            <Text>Welcome to chat support!</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text>Starting soon!</Text>
          </Card.Content>
        </Card>
      </ScrollView>
      <View style={styles.inputContainer}>
        <PaperTextInput style={styles.input} placeholder="Type a message" />
        <FAB
          style={styles.fab}
          small
          icon="send"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ChatComponent;