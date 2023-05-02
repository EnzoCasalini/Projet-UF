import {NavigationContainer} from "@react-navigation/native";
import LoginRegisterStack from "./Navigation/Stacks/LoginRegisterStack";
import {useEffect, useState} from "react";
import FavoriteGamesProvider from "./FavoriteGamesProvider";
import gamesContext from "./gamesContext";

export default function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const gamesJson = require('./games.json');
        setGames(gamesJson.games);
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

