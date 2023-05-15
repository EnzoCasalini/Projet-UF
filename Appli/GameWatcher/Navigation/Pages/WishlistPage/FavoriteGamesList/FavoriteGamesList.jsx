import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from "react";
import favoriteGamesContext from "../../../../favoriteGamesContext";
import FavoriteGame from "./FavoriteGame/FavoriteGame";

const FavoriteGamesList = ({navigation}) => {
    const { favoriteGames } = useContext(favoriteGamesContext);
    let gamesList = [...favoriteGames]; // Copier la liste originale

    // Si le nombre de jeux est impair, ajouter un élément fantôme
    if (gamesList.length % 2 !== 0) {
        gamesList.push({id: 'empty', isEmpty: true});
    }

    return (
        <>
            {gamesList.length > 0 ? (
                <FlatList
                    data={gamesList}
                    numColumns={2}
                    contentContainerStyle={{paddingBottom: 210, paddingTop: 30}}
                    columnWrapperStyle={{marginBottom: 20, alignContent: 'flex-start', justifyContent: 'space-around'}}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => item.isEmpty ? <View style={{flex: 1}}/> : (
                        <FavoriteGame
                            cover={item.cover}
                            onPress={() => navigation.navigate("Details", {game: item})}
                            game={item}
                        />)}
                />
            ) : (
                <Text style={styles.noGameText}>Aucun jeu dans vos favoris. Ajoutez-en depuis la page "Incoming" !</Text>
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
    },
});

export default FavoriteGamesList;
