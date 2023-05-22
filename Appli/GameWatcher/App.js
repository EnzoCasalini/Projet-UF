import {NavigationContainer} from "@react-navigation/native";
import LoginRegisterStack from "./Navigation/Stacks/LoginRegisterStack";
import {useEffect, useState} from "react";
import FavoriteGamesProvider from "./FavoriteGamesProvider";
import gamesContext from "./gamesContext";
import {fetchGames, fetchGamesWithOption} from "./services/rawgApiService";
import * as Notifications from 'expo-notifications';


export default function App() {
    const [games, setGames] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [canFetchMore, setCanFetchMore] = useState(true);


    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    const fetchMoreGames = async () => {
        if (!canFetchMore) return;
        setIsLoading(true);
        if (nextPage !== null) {
            try {
                const newGames = await fetchGames(nextPage);
                setGames([...games, ...newGames.results]);
                setNextPage(newGames.next);
            }
            catch (error) {
                console.error(error);
            }
        }
        setIsLoading(false);
    }

    const searchGames = async (searchText) => {
        setIsLoading(true);
        setSearchText(searchText);
        try {
            // On requête l'API avec le texte de recherche
            const searchedGames = await fetchGamesWithOption(1, {  ordering: '-added', search: searchText, search_exact: true });
            // On remplace les jeux actuels par les jeux trouvés
            setGames(searchedGames.results);
            setNextPage(searchedGames.next);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    const setFilterOptionsAndResetGames = async (options) => {
        setCanFetchMore(false);
        setSearchText("");
        setGames([]);
        try {
            // On requête l'API avec les options de filtrage
            const filteredGames = await fetchGamesWithOption(1, options);
            // On remplace les jeux actuels par les jeux filtrés
            setGames(filteredGames.results);
            setNextPage(filteredGames.next);
        } catch (error) {
            console.error(error);
        } finally {
            setCanFetchMore(true);
        }
    }

    useEffect(() => {
        const fetchFirstGames = async () => {
            try {
                const firstGames = await fetchGames();
                setGames(firstGames.results);
                setNextPage(firstGames.next);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchFirstGames();
    }, []);


    return (
        <NavigationContainer>
            <FavoriteGamesProvider>
                <gamesContext.Provider value={{games, fetchMoreGames, isLoading, setFilterOptionsAndResetGames, searchGames, searchText, setSearchText}}>
                    <LoginRegisterStack />
                </gamesContext.Provider>
            </FavoriteGamesProvider>
        </NavigationContainer>
    );
}

