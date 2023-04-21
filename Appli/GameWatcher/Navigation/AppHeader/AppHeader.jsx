import {StyleSheet, Text, View} from 'react-native';
import Notification from "./Notification/Notification";
import Logo from "./Logo/Logo";
import Profile from "./Profile/Profile";
import React from "react";

const AppHeader = ({navigation}) => {
    return (
        <View style={styles.homeHeader}>
            <Notification />
            <Logo />
            <Profile navigation={navigation} />
        </View>
    );
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

export default AppHeader;
