import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WishlistPage from "../Pages/WishlistPage/WishlistPage";


const Stack = createNativeStackNavigator();
const wishlistScreenName = "Wishlist";

const WishlistStack = () => {

    return (
        <Stack.Navigator initialRoutName="WishlistPage">
            <Stack.Screen name={wishlistScreenName} component={WishlistPage} />
        </Stack.Navigator>
    )
}

export default WishlistStack;