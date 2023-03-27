import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Profile from "../AppHeader/Profile/Profile";
import Notification from "../AppHeader/Notification/Notification";
import Logo from "../AppHeader/Logo/Logo";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

const Stack = createNativeStackNavigator();
const homeScreenName = "Home";
const detailsScreenName = "Details";
const profileScreenName = "Profile";

const HomeStack = () => {

    return (
        <Stack.Navigator initialRoutName="HomePage">
            <Stack.Screen name={homeScreenName} component={HomePage} options={
                ({navigation}) => {
                    return {
                        headerLeft: () => <Notification/>,
                        headerRight: () => <Profile navigation={navigation}/>,
                        headerTitle: () => <Logo/>,
                    };
                }

            }/>
            <Stack.Screen name={detailsScreenName} component={DetailsPage} />
            <Stack.Screen name={profileScreenName} component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default HomeStack;