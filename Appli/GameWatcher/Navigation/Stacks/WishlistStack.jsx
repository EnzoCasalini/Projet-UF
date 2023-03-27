import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WishlistPage from "../Pages/WishlistPage/WishlistPage";
import Notification from "../AppHeader/Notification/Notification";
import Profile from "../AppHeader/Profile/Profile";
import Logo from "../AppHeader/Logo/Logo";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";


const Stack = createNativeStackNavigator();
const wishlistScreenName = "Wishlist";
const profileScreenName = "Profile";

const WishlistStack = () => {

    return (
        <Stack.Navigator initialRoutName="WishlistPage">
            <Stack.Screen name={wishlistScreenName} component={WishlistPage} options={
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

export default WishlistStack;