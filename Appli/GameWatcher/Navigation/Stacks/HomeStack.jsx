import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";


const Stack = createNativeStackNavigator();
const homeScreenName = "Home";
const detailsScreenName = "Details";

const HomeStack = () => {

    return (
        <Stack.Navigator initialRoutName="HomePage">
            <Stack.Screen name={homeScreenName} component={HomePage} />
            <Stack.Screen name={detailsScreenName} component={DetailsPage} />
        </Stack.Navigator>
    )
}

export default HomeStack;