import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext} from "react";
import GameCover from "../../../HomePage/GameList/GameCover/GameCover";
import favoriteGamesContext from "../../../../../favoriteGamesContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const FavoriteGame = ({cover, onPress, game}) => {
    const { removeGameFromFavorites } = useContext(favoriteGamesContext);

    return (
        <View>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => removeGameFromFavorites(game)}>
                <Ionicons name='heart' size={30} color='#4EF5B9' style={styles.shadow}/>
            </TouchableOpacity>
            <GameCover cover={cover} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    favoriteButton: {
        position: 'absolute',
        borderRadius: 50,
        top: -10,
        right: -10,
        backgroundColor: '#302F37',
        zIndex: 2,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});

export default FavoriteGame;
