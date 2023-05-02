import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import GameImage from "./GameImage/GameImage";
import GameInfos from "./GameInfos/GameInfos";

const DetailsPage = ({ route }) => {
    const { game } = route.params;

    return (
        <ScrollView style={styles.game}>
            <GameImage cover={game.cover}/>
            <GameInfos game={game} />
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
