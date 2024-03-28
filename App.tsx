import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, useColorScheme } from "react-native";
import SettingsComponent from "./src/components/SettingsComponent";
import ChatComponent from "./src/components/ChatComponent";
import ProfileComponent from "./src/components/ProfileComponent";
import { colors } from "./assets/colors";
import HomeTabs from "./src/components/HomeTabs";
import store from "./src/app/store";

// ... other imports ...

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: colors._1C2B33,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? "light-content" : "dark-content"}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              activeColor={colors.white}
              inactiveColor={colors.white}
              barStyle={{ backgroundColor: colors.black }}
            >
              <Tab.Screen
                name="Home"
                component={HomeTabs}
                options={{
                  tabBarLabel: "Home",
                  tabBarColor: colors.white,
                  tabBarIcon: ({ color }) => (
                    <Icon name="home" color={colors.white} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Bookmarks"
                component={SettingsComponent}
                options={{
                  tabBarLabel: "Bookmarks",
                  tabBarColor: colors.white,
                  tabBarIcon: ({ color }) => (
                    <Icon name="bookmark" color={colors.white} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Chat"
                component={ChatComponent}
                options={{
                  tabBarLabel: "Chat",
                  tabBarColor: colors.white,
                  tabBarIcon: ({ color }) => (
                    <Icon
                      name="message-square"
                      color={colors.white}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileComponent}
                options={{
                  tabBarLabel: "Profile",
                  tabBarColor: colors.white,
                  tabBarIcon: ({ color }) => (
                    <Icon name="user" color={colors.white} size={26} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
