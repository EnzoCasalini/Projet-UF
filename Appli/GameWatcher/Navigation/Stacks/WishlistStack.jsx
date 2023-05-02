import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Pages
import WishlistPage from "../Pages/WishlistPage/WishlistPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AppHeader from "../AppHeader/AppHeader";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import OtherPagesHeader from "../OtherPagesHeader/OtherPagesHeader";


const Stack = createNativeStackNavigator();
const wishlistScreenName = "Wishlist";
const detailsScreenName = "Details";
const profileScreenName = "Profile";

const WishlistStack = () => {

    return (
        <Stack.Navigator initialRoutName="WishlistPage">
            <Stack.Screen name={wishlistScreenName} component={WishlistPage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <AppHeader navigation={navigation} title="Wishlist" />
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

export default WishlistStack;