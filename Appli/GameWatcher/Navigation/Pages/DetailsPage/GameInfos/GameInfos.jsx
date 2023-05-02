import React from "react";
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarRating from "./StarRating/StarRating";
import GameLabelAndTextInfos from "./GameLabelAndTextInfos/GameLabelAndTextInfos";

const GameInfos = ({game}) => {

    const goToGameWebsite = () => {
        Linking.openURL(game.website);
    };

    return (
        <View style={styles.gameInfos}>
            <Text style={styles.gameName}>{game.name}</Text>
            <StarRating rating={game.rating} />
            <GameLabelAndTextInfos description={game.description} platforms={game.platforms} releaseDate={game.releaseDate} />
            <TouchableOpacity onPress={goToGameWebsite}>
                <Text style={[styles.gameWebsite, styles.shadow]}>Check out their website !</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gameInfos: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 50,
        paddingBottom: 50,
        top: -50,
    },
    gameName: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
    },
    label: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    infoText: {
        color: '#ffffff',
        marginTop: 10,
        fontSize: 15,
        textAlign: 'justify',
    },
    gameWebsite: {
        color: '#C9FAE8',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
    },
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

export default GameInfos;
