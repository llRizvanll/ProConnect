import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeComponent from './HomeComponent';
import PopularComponent from './PopularComponent';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            tabBarPosition="top"
            screenOptions={{
                tabBarStyle: {
                  backgroundColor: '#fff',
                  elevation: 5, // Shadow for Android
                  shadowOpacity: 0.5, // Shadow for iOS
                  margin: 10,
                  padding: 2,
                },
                tabBarLabelStyle: {
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: 'IBMPlexSans-Regular',
                },
                tabBarIndicatorStyle: {
                  backgroundColor: '#000',
                },
              }}
        >
            <Tab.Screen name="Home" component={HomeComponent} />
            <Tab.Screen name="Popular" component={PopularComponent} />
        </Tab.Navigator>
    );
};

export default HomeTabs;