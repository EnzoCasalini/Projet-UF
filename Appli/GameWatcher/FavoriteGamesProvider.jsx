import {useState} from "react";
import favoriteGamesContext from "./favoriteGamesContext";
import {Alert} from "react-native";
import {database} from "./firebaseConfig";
import {ref, set, remove} from 'firebase/database';


const FavoriteGamesProvider = ({ children }) => {
    const [favoriteGames, setFavoriteGames] = useState([]);

    const addGameToFavorites = (game, userId) => {
        console.log(`game2 : ${game.id}`)
        if (userId) {
            const gameRef = ref(database, `utilisateurs/${userId}/favoriteGames/${game.id}`);
            set(gameRef, {
                id: game.id,
                background_image: game.background_image
            }).then(() => {
                setFavoriteGames([...favoriteGames, game]);
            });
        }
    };

    const removeGameFromFavorites = (game, userId) => {
        Alert.alert(
            "Supprimer des favoris",
            "Êtes-vous sûr de vouloir supprimer ce jeu de vos favoris ?",
            [
                {
                    text: "Annuler",
                    style: "cancel"
                },
                {
                    text: "Confirmer", onPress: async () => {
                        if (userId) {
                            const gameRef = ref(database, `utilisateurs/${userId}/favoriteGames/${game.id}`);
                            remove(gameRef).then(() => {
                                setFavoriteGames(favoriteGames.filter((favGame) => favGame.id !== game.id));
                            });
                        }
                    }
                }
            ]
        );
    };

    const isGameFavorite = (game) => {
        return favoriteGames.some((favGame) => favGame.id === game.id);
    }

    return (
        <favoriteGamesContext.Provider
            value={{ favoriteGames, addGameToFavorites, removeGameFromFavorites, isGameFavorite }}
        >
            {children}
        </favoriteGamesContext.Provider>
    );
};

export default FavoriteGamesProvider;