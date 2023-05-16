import {NavigationContainer} from "@react-navigation/native";
import LoginRegisterStack from "./Navigation/Stacks/LoginRegisterStack";
import {useEffect, useState} from "react";
import FavoriteGamesProvider from "./FavoriteGamesProvider";
import gamesContext from "./gamesContext";

export default function App() {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);

    const fetchGames = async (page) => {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=e08ee0dddec9442490cf0511abf68087&page=${page}`);
            const data = await response.json();
            setGames(oldGames => [...oldGames, ...data.results]);
        }
        catch (error) {
            console.error(error);
        }
    }

    const loadMoreGames = () => {
        setPage(oldPage => oldPage + 1);
        fetchGames(page + 1);
    }

    useEffect(() => {
        fetchGames(page);
    }, []);

    return (
        <NavigationContainer>
            <FavoriteGamesProvider>
                <gamesContext.Provider value={{games}}>
                    <LoginRegisterStack />
                </gamesContext.Provider>
            </FavoriteGamesProvider>
        </NavigationContainer>
    );
}

