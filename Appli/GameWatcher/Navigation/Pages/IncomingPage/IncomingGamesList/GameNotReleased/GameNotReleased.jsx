import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import GameCover from "../../../HomePage/GameList/GameCover/GameCover";
import {useContext} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import favoriteGamesContext from "../../../../../favoriteGamesContext";
import {auth} from "../../../../../firebaseConfig";

const GameNotReleased = ({cover, onPress, game}) => {
    const { addGameToFavorites, removeGameFromFavorites, isGameFavorite } = useContext(favoriteGamesContext);
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const handleFavorite = (game) => {
        console.log(`game : ${game.id}`);
        if (!userId) {
            Alert.alert(
                "Non connecté",
                "Vous devez être connecté pour utiliser cette fonctionnalité",
                [
                    { text: "OK" }
                ]
            );
            return;
        }
        !isGameFavorite(game) ? addGameToFavorites(game) : removeGameFromFavorites(game);
    }

    return (
        <View>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => handleFavorite(game)}>
                <Ionicons name={isGameFavorite(game) ? 'heart' : 'heart-outline'} size={30} color={isGameFavorite(game) ? '#4EF5B9' : '#C9FAE8'} style={styles.shadow}/>
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

export default GameNotReleased;
