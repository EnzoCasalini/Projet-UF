import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import gamesContext from "../../../gamesContext";
import IncomingGamesList from "./IncomingGamesList/IncomingGamesList";

const IncomingPage = ({navigation}) => {
    const { games } = useContext(gamesContext);

    return (
        <View style={styles.gamesContainer}>
            <IncomingGamesList games={games} navigation={navigation}/>
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
