import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Pages
import LoginPage from "../Pages/LoginRegisterPage/LoginPage/LoginPage";
import RegisterPage from "../Pages/LoginRegisterPage/RegisterPage/RegisterPage";
import TabNavigator from "../TabNavigator";


const Stack = createNativeStackNavigator();
const loginScreenName = "Login";
const registerScreenName = "Register";
const homeScreenName = "Home";

const LoginRegisterStack = () => {

    return (
        <Stack.Navigator initialRoutName="LoginPage" screenOptions={{headerShown: false}}>
            <Stack.Screen name={loginScreenName} component={LoginPage}/>
            <Stack.Screen name={registerScreenName} component={RegisterPage}/>
            <Stack.Screen name={homeScreenName} component={TabNavigator}/>
        </Stack.Navigator>
    )
}

export default LoginRegisterStack;
