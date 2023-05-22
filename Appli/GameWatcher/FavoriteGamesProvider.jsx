import {useEffect, useState} from "react";
import favoriteGamesContext from "./favoriteGamesContext";
import {Alert} from "react-native";
import {auth, database} from "./firebaseConfig";
import {off, onValue, ref, remove, set} from 'firebase/database';


const FavoriteGamesProvider = ({ children }) => {
    const [favoriteGames, setFavoriteGames] = useState([]);
    const [userId, setUserId] = useState(null);

    const addGameToFavorites = (game) => {
        if (userId) {
            const gameRef = ref(database, `utilisateurs/${userId}/favoriteGames/${game.id}`);
            set(gameRef, {
                id: game.id,
                background_image: game.background_image
            });
        }
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
                        if (userId) {
                            const gameRef = ref(database, `utilisateurs/${userId}/favoriteGames/${game.id}`);
                            remove(gameRef);
                        }
                    }
                }
            ]
        );
    };

    useEffect(() => {
        if (userId) {
            const favGamesRef = ref(database, `utilisateurs/${userId}/favoriteGames`);
            const onValueChange = onValue(favGamesRef, (snapshot) => {
                const data = snapshot.val();
                const gamesArray = [];
                for(let gameId in data) {
                    gamesArray.push(data[gameId]);
                }
                setFavoriteGames(gamesArray);
            });

            // On enlève les écouteurs sur la BDD lorsque le composant est démonté.
            return () => {
                off(favGamesRef, onValueChange);
            }
        }
    }, [userId]);

    useEffect(() => {
        // Unsubscribe on cleanup.
        return auth.onAuthStateChanged(user => {
            setUserId(user ? user.uid : null);
        });
    }, []);

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