import {useState} from "react";
import favoriteGamesContext from "./favoriteGamesContext";

const FavoriteGamesProvider = ({ children }) => {
    const [favoriteGames, setFavoriteGames] = useState([]);

    const addGameToFavorites = (game) => {
        setFavoriteGames([...favoriteGames, game]);
    };

    const removeGameFromFavorites = (game) => {
        setFavoriteGames(favoriteGames.filter((favGame) => favGame.id !== game.id));
    };

    return (
        <favoriteGamesContext.Provider
            value={{ favoriteGames, addGameToFavorites, removeGameFromFavorites }}
        >
            {children}
        </favoriteGamesContext.Provider>
    );
};

export default FavoriteGamesProvider;