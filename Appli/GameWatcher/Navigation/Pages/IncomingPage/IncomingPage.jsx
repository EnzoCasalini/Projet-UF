import React from 'react';
import {StyleSheet, View} from 'react-native';
import IncomingGamesList from "./IncomingGamesList/IncomingGamesList";

const IncomingPage = ({navigation}) => {

    return (
        <View style={styles.gamesContainer}>
            <IncomingGamesList navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    gamesContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        paddingHorizontal: 16,
        zIndex: 1,
        backgroundColor: "#242429"
    },
});

export default IncomingPage;
