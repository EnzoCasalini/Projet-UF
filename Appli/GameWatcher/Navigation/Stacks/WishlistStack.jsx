import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Pages
import WishlistPage from "../Pages/WishlistPage/WishlistPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AppHeader from "../AppHeader/AppHeader";


const Stack = createNativeStackNavigator();
const wishlistScreenName = "Wishlist";
const profileScreenName = "Profile";

const WishlistStack = () => {

    return (
        <Stack.Navigator initialRoutName="WishlistPage">
            <Stack.Screen name={wishlistScreenName} component={WishlistPage} options={
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

export default WishlistStack;