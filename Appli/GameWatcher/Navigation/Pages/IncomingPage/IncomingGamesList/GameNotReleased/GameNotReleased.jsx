import {TouchableOpacity, View, StyleSheet} from 'react-native';
import GameCover from "../../../HomePage/GameList/GameCover/GameCover";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const GameNotReleased = ({cover, onPress}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <View>
            <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
                <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={30} color={isFavorite ? '#4EF5B9' : '#C9FAE8'} style={styles.shadow}/>
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
