import {ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from "react";
import {fetchGames, fetchGamesWithOption} from "../../../../services/rawgApiService";
import GameNotReleased from "./GameNotReleased/GameNotReleased";

const IncomingGamesList = ({navigation}) => {
    const [gamesNotReleased, setGamesNotReleased] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchGamesNotReleased = async () => {
        try {
            let today = new Date();
            let tomorrow = new Date();
            let nextYear = new Date();

            tomorrow.setDate(today.getDate() + 1);
            nextYear.setFullYear(today.getFullYear() + 1);

            let options = {
                dates: `${tomorrow.toISOString().split('T')[0]},${nextYear.toISOString().split('T')[0]}`
            };

            let games = await fetchGamesWithOption(1, options);
            setGamesNotReleased(games.results);
            setNextPage(games.next);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchMoreGames = async () => {
        setIsLoading(true);
        if (nextPage !== null) {
            try {
                const newGames = await fetchGames(nextPage);
                setGamesNotReleased([...gamesNotReleased, ...newGames.results]);
                setNextPage(newGames.next);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setIsLoading(false);
            }
        }
    }


    useEffect(() => {
        fetchGamesNotReleased();
    }, []);

    return (
        <>
            {gamesNotReleased.length > 0 ? (
                <FlatList
                    data={gamesNotReleased}
                    numColumns={2}
                    contentContainerStyle={{paddingBottom: 210, paddingTop: 20}}
                    columnWrapperStyle={{justifyContent: "space-around", marginBottom: 15}}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <GameNotReleased cover={item.background_image} onPress={() => navigation.navigate("Details", {game: item})} game={item} />}
                    onEndReached={fetchMoreGames}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#C9FAE8" style={{paddingTop: 20}} /> : null}
                />
            ) : (
                <Text style={styles.noGameText}>No upcoming releases planned in the coming months !</Text>
            )}
        </>
    );
}


const styles = StyleSheet.create({
    noGameText: {
        fontSize: 20,
        paddingTop: 20,
        textAlign: "center",
        color: "#ffffff",
    }
});

export default IncomingGamesList;
