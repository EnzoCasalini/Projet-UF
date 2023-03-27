import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IncomingPage from "../Pages/IncomingPage/IncomingPage";
import Notification from "../AppHeader/Notification/Notification";
import Profile from "../AppHeader/Profile/Profile";
import Logo from "../AppHeader/Logo/Logo";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";


const Stack = createNativeStackNavigator();
const incomingScreenName = "Incoming";
const profileScreenName = "Profile";

const IncomingStack = () => {

    return (
        <Stack.Navigator initialRoutName="IncomingScreen">
            <Stack.Screen name={incomingScreenName} component={IncomingPage} options={
                ({navigation}) => {
                    return {
                        headerLeft: () => <Notification/>,
                        headerRight: () => <Profile navigation={navigation}/>,
                        headerTitle: () => <Logo/>,
                    };
                }

            }/>
            <Stack.Screen name={profileScreenName} component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default IncomingStack;