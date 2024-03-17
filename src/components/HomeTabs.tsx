import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeComponent from './HomeComponent';
import PopularComponent from './PopularComponent';
import { colors } from '../../assets/colors';
import { AppConstants } from '../utility/AppConstants';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            tabBarPosition="top"
            screenOptions={{
                tabBarStyle: {
                  backgroundColor: colors.white,
                  elevation: 5, // Shadow for Android
                  shadowOpacity: 0.5, // Shadow for iOS
                  margin: 10,
                  padding: 2,
                },
                tabBarLabelStyle: {
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: AppConstants.fontFamily,
                },
                tabBarIndicatorStyle: {
                  backgroundColor: colors.black,
                },
              }}
        >
            <Tab.Screen name="Dashboard" component={HomeComponent} />
            <Tab.Screen name="Popular" component={PopularComponent} />
        </Tab.Navigator>
    );
};

export default HomeTabs;