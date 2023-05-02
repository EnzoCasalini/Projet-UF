import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from "react";
import favoriteGamesContext from "../../../../favoriteGamesContext";
import FavoriteGame from "./FavoriteGame/FavoriteGame";

const FavoriteGamesList = ({navigation}) => {
    const { favoriteGames } = useContext(favoriteGamesContext);

    return (
        <>
            {favoriteGames.length > 0 ? (
                <FlatList
                    data={favoriteGames}
                    numColumns={2}
                    contentContainerStyle={{paddingBottom: 210, paddingTop: 30}}
                    columnWrapperStyle={{justifyContent: "space-around", marginBottom: 20}}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <FavoriteGame cover={item.cover} onPress={() => navigation.navigate("Details", {game: item})} game={item} />}
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
    }
});

export default FavoriteGamesList;
