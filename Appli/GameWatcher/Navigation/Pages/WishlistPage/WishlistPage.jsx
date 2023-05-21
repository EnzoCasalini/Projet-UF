import React from 'react';
import {StyleSheet, View} from 'react-native';
import FavoriteGamesList from "./FavoriteGamesList/FavoriteGamesList";

const WishlistPage = ({navigation}) => {
    return (
        <View style={styles.gamesContainer}>
            <FavoriteGamesList navigation={navigation} />
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

export default WishlistPage;
