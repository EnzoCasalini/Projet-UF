import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useContext, useEffect, useState} from "react";
import GameNotReleased from "./GameNotReleased/GameNotReleased";
import gamesContext from "../../../../gamesContext";

const IncomingGamesList = ({navigation}) => {
    const [allGamesNotReleased, setAllGamesNotReleased] = useState(false);
    const { games } = useContext(gamesContext);

    const checkIfGameIsReleased = (game) => {
        const releaseDate = new Date(game.released.split('/').reverse().join('-'));
        const today = new Date();
        return releaseDate <= today;
    }

    const checkAllGamesNotReleased = () => {
        return games.filter((game) => {
            if (!checkIfGameIsReleased(game)) {
                return game;
            } else
                return null;
        });
    }

    useEffect(() => {
        setAllGamesNotReleased(checkAllGamesNotReleased());
    }, [games]);

    return (
        <>
            {allGamesNotReleased.length > 0 ? (
                <FlatList
                    data={allGamesNotReleased}
                    numColumns={2}
                    contentContainerStyle={{paddingBottom: 210, paddingTop: 30}}
                    columnWrapperStyle={{justifyContent: "space-around", marginBottom: 20}}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <GameNotReleased cover={item.cover} onPress={() => navigation.navigate("Details", {game: item})} game={item} />}
                />
            ) : (
                <Text style={styles.noGameText}>Aucune sortie prévue dans les mois à venir !</Text>
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
