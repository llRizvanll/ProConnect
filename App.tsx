import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, useColorScheme } from "react-native";
import SettingsComponent from "./src/components/SettingsComponent";
import HomeComponent from "./src/components/HomeComponent";
import ChatComponent from "./src/components/ChatComponent";
import ProfileComponent from "./src/components/ProfileComponent";
import { colors } from "./assets/colors";

// ... other imports ...

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: colors._1C2B33,
    flex: 1,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor={colors._f0edf6}
            inactiveColor={colors.inactiveIconColor}
            barStyle={{ backgroundColor: colors.primary }}
          >
            <Tab.Screen
              name="Home"
              component={HomeComponent}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <Feather name="home" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsComponent}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color }) => (
                  <Feather name="settings" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Chat"
              component={ChatComponent}
              options={{
                tabBarLabel: "Chat",
                tabBarIcon: ({ color }) => (
                  <Feather name="chat" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileComponent}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <Feather name="person" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
