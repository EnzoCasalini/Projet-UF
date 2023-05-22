import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import GameImage from "./GameImage/GameImage";
import GameInfos from "./GameInfos/GameInfos";
import {fetchGame} from "../../../services/rawgApiService";
import GameSimilar from "./GameSimilar/GameSimilar";

const DetailsPage = ({ route }) => {
    const { game } = route.params
    const [gameInfos, setGameInfos] = useState({});

    const fetchAndSetGameInfos = async () => {
        const fetchedGameInfos = await fetchGame(game.id);
        setGameInfos(fetchedGameInfos);
    }

    useEffect(() => {
        fetchAndSetGameInfos();
    }, []);


    return (
        <ScrollView style={styles.game}>
            <GameImage cover={gameInfos.background_image}/>
            <GameInfos game={gameInfos} />
            <GameSimilar gameGenres={gameInfos.genres} gameId={game.id}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    game: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#242429',
    },
});

export default DetailsPage;
