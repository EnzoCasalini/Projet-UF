import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AppHeader from "../AppHeader/AppHeader";
import OtherPagesHeader from "../OtherPagesHeader/OtherPagesHeader";
import ProfileEditPage from "../Pages/ProfilePage/ProfileEditPage";


const Stack = createNativeStackNavigator();
const homeScreenName = "Home";
const detailsScreenName = "Details";
const profileScreenName = "Profile";
const profileEditScreenName = "ProfileEdit"

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen name={homeScreenName} component={HomePage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <AppHeader navigation={navigation} />
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
            <Stack.Screen name={profileEditScreenName} component={ProfileEditPage} />
        </Stack.Navigator>
    )
}

export default HomeStack;
