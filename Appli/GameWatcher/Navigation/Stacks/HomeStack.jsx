import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from "../Pages/HomePage/HomePage";


const Stack = createNativeStackNavigator();
const homeScreenName = "HomeScreen";

const HomeStack = () => {

    return (
        <Stack.Navigator initialRoutName="HomePage">
            <Stack.Screen name={homeScreenName} component={HomePage} />
        </Stack.Navigator>
    )
}

export default HomeStack;