import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Pages
import IncomingPage from "../Pages/IncomingPage/IncomingPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AppHeader from "../AppHeader/AppHeader";


const Stack = createNativeStackNavigator();
const incomingScreenName = "Incoming";
const profileScreenName = "Profile";

const IncomingStack = () => {

    return (
        <Stack.Navigator initialRoutName="IncomingScreen">
            <Stack.Screen name={incomingScreenName} component={IncomingPage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <AppHeader navigation={navigation} />
                        ),
                    };
                }
            }/>
            <Stack.Screen name={profileScreenName} component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default IncomingStack;