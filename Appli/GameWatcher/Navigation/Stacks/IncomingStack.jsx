import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IncomingPage from "../Pages/IncomingPage/IncomingPage";


const Stack = createNativeStackNavigator();
const incomingScreenName = "IncomingScreen";

const IncomingStack = () => {

    return (
        <Stack.Navigator initialRoutName="IncomingScreen">
            <Stack.Screen name={incomingScreenName} component={IncomingPage} />
        </Stack.Navigator>
    )
}

export default IncomingStack;