import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {fetchGamesByGenre} from "../../../../services/rawgApiService";
import GameCover from "../../HomePage/GameList/GameCover/GameCover";
import {useNavigation} from "@react-navigation/native";


const GameSimilar = ({ gameGenres, gameId }) => {
    const [similarGames, setSimilarGames] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        if (gameGenres) {
            // Récupère les jeux pour chaque genre simultanément.
            const fetchPromises = gameGenres.map((genre) =>
                fetchGamesByGenre(genre.slug).then((data) => data.results)
            );

            // Ajoute un fetch supplémentaire pour obtenir les jeux qui ont tous les genres.
            const allGenres = gameGenres.map((genre) => genre.slug).join(',');
            fetchPromises.push(fetchGamesByGenre(allGenres).then((data) => data.results));

            Promise.all(fetchPromises).then((fetchedGamesArray) => {
                // On crée un tableau à partir des tableaux de jeux récupérés.
                const fetchedGames = [].concat(...fetchedGamesArray);

                // Supprime les doublons potentiels et le jeu actuel de la liste des jeux similaires.
                const uniqueGames = Array.from(new Set(fetchedGames.map((game) => game.id))).map((id) =>
                    fetchedGames.find((game) => game.id === id)
                );

                // On enlève le jeu actuel de la liste des jeux similaires.
                const gamesWithoutCurrentGame = uniqueGames.filter((game) => game.id !== gameId);

                setSimilarGames(gamesWithoutCurrentGame);
            });
        }
    }, [gameGenres]);

    return (
        <>
            <Text style={styles.title}>Vous pourriez aussi aimer :</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={similarGames}
                    horizontal
                    contentContainerStyle={{paddingBottom: 120, paddingHorizontal: 10}}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.gameContainer}>
                                <GameCover
                                    cover={item.background_image}
                                    onPress={() => navigation.push('Details', { game: item })}/>
                            </View>
                        )}
                    }
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
    },
    listContainer: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    gameContainer: {
        marginRight: 10,
    },
});

export default GameSimilar;
