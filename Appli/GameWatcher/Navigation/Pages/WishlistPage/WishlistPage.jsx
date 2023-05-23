import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FavoriteGamesList from "./FavoriteGamesList/FavoriteGamesList";
import {auth} from "../../../firebaseConfig";

const WishlistPage = ({navigation}) => {
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    return (
        <View style={styles.gamesContainer}>
            <FavoriteGamesList navigation={navigation} />
            {!userId && (
                <View style={styles.loginMessageContainer}>
                    <Text style={styles.loginMessageText}>You need to connect to use this functionality</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Log in</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    loginMessageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        paddingTop: "70%",
        paddingHorizontal: "10%",
        alignItems: "center",
    },
    loginMessageText: {
        color: "#C9FAE8",
        fontSize: 18,
        textAlign: "center",
    },
    loginLink: {
        color: '#4EF5B9',
        fontSize: 16,
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});

export default WishlistPage;
