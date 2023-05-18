import {NavigationContainer} from "@react-navigation/native";
import LoginRegisterStack from "./Navigation/Stacks/LoginRegisterStack";
import {useEffect, useState} from "react";
import FavoriteGamesProvider from "./FavoriteGamesProvider";
import gamesContext from "./gamesContext";
import {fetchGames} from "./services/rawgApiService";

export default function App() {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [filterOptions, setFilterOptions] = useState({});
    const [gamesCache, setGamesCache] = useState({});


    const fetchMoreGames = async () => {
        setIsLoading(true);
        const nextPage = page + 1;
        setPage(nextPage);
        // On crée une clé de cache qui permet de ne pas requête l'API si les données sont déjà en cache.
        const cacheKey = JSON.stringify({page: page + 1, ...filterOptions});

        if (gamesCache[cacheKey]) {
            // Si les données sont déjà en cache, on les récupère et on les ajoute à la liste des jeux.
            setGames(oldGames => [...oldGames, ...gamesCache[cacheKey]]);
        } else {
            try {
                // Sinon, on requête l'API et on ajoute les données à la liste des jeux.
                const newGames = await fetchGames(page + 1, filterOptions);
                setGames(oldGames => [...oldGames, ...newGames]);
                setGamesCache(oldCache => ({...oldCache, [cacheKey]: newGames}));
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const setFilterOptionsAndResetGames = (options) => {
        setFilterOptions(options);
        setGames([]);
        setPage(0);
    }

    useEffect(() => {
        fetchMoreGames();
    }, []);


    return (
        <NavigationContainer>
            <FavoriteGamesProvider>
                <gamesContext.Provider value={{games, fetchMoreGames, isLoading, setFilterOptions: setFilterOptionsAndResetGames}}>
                    <LoginRegisterStack />
                </gamesContext.Provider>
            </FavoriteGamesProvider>
        </NavigationContainer>
    );
}

