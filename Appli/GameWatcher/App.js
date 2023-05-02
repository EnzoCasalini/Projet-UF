import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./Navigation/TabNavigator";
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
                    <TabNavigator />
                </gamesContext.Provider>
            </FavoriteGamesProvider>
        </NavigationContainer>
    );
}

