import {useState} from "react";
import favoriteGamesContext from "./favoriteGamesContext";
import {Alert} from "react-native";

const FavoriteGamesProvider = ({ children }) => {
    const [favoriteGames, setFavoriteGames] = useState([]);

    const addGameToFavorites = (game) => {
        setFavoriteGames([...favoriteGames, game]);
    };

    const removeGameFromFavorites = (game) => {
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
                        setFavoriteGames(favoriteGames.filter((favGame) => favGame.id !== game.id));
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