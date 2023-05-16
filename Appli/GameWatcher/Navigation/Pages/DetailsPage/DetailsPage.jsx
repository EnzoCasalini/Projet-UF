import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import GameImage from "./GameImage/GameImage";
import GameInfos from "./GameInfos/GameInfos";

const DetailsPage = ({ route }) => {
    const { game } = route.params
    const [gameInfos, setGameInfos] = useState({});

    useEffect(() => {
        const fetchGame = async () => {
            const response = await fetch(`https://api.rawg.io/api/games/${game.id}?key=e08ee0dddec9442490cf0511abf68087`)
            const data = await response.json()
            setGameInfos(data);
        }
        fetchGame();
    }, []);

    return (
        <ScrollView style={styles.game}>
            <GameImage cover={gameInfos.background_image}/>
            <GameInfos game={gameInfos} />
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
