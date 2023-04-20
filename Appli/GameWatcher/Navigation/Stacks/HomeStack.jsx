import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Profile from "../AppHeader/Profile/Profile";
import Notification from "../AppHeader/Notification/Notification";
import Logo from "../AppHeader/Logo/Logo";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import {StyleSheet, View} from "react-native";

const Stack = createNativeStackNavigator();
const homeScreenName = "Home";
const detailsScreenName = "Details";
const profileScreenName = "Profile";

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName="HomePage">
            <Stack.Screen name={homeScreenName} component={HomePage} options={
                ({navigation}) => {
                    return {
                        header: () => (
                            <View style={styles.homeHeader}>
                                <Notification />
                                <Logo />
                                <Profile navigation={navigation} />
                            </View>
                        ),
                        headerStyle: {
                            backgroundColor: "#302F37",
                        },
                    };
                }
            }/>

            <Stack.Screen name={detailsScreenName} component={DetailsPage} />
            <Stack.Screen name={profileScreenName} component={ProfilePage} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        height: 120,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#302F37",
        alignItems: "center",
        paddingHorizontal: 30,
        opacity: 0.98,
        paddingTop: 50,
    }
});

export default HomeStack;