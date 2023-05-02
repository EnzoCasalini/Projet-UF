import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Pages
import IncomingPage from "../Pages/IncomingPage/IncomingPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AppHeader from "../AppHeader/AppHeader";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import OtherPagesHeader from "../OtherPagesHeader/OtherPagesHeader";


const Stack = createNativeStackNavigator();
const incomingScreenName = "Incoming";
const detailsScreenName = "Details";
const profileScreenName = "Profile";

const IncomingStack = () => {

    return (
        <Stack.Navigator initialRoutName="IncomingScreen">
            <Stack.Screen name={incomingScreenName} component={IncomingPage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <AppHeader navigation={navigation} title="Incoming Games" />
                        ),
                    };
                }
            }/>
            <Stack.Screen name={detailsScreenName} component={DetailsPage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <OtherPagesHeader navigation={navigation} title="Details"/>
                        ),
                    };
                }
            }/>
            <Stack.Screen name={profileScreenName} component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default IncomingStack;
