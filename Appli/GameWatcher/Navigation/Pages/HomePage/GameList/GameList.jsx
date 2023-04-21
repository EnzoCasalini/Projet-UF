import {FlatList} from 'react-native';
import React, {useEffect, useState} from "react";
import GameCover from "./GameCover/GameCover";

const GameList = ({games, searchText, navigation}) => {
    const [filteredGameList, setFilteredGameList] = useState(games);

    useEffect(() => {
        if (searchText !== '') {
            const filteredGames = games.filter((game) => {
                return game.name.toLowerCase().startsWith(searchText.trim().toLowerCase());
            });

            setFilteredGameList(filteredGames);
        } else {
            setFilteredGameList(games);
        }
    }, [searchText, games]);

    return (
        <FlatList
            data={filteredGameList}
            numColumns={2}
            contentContainerStyle={{paddingBottom: 210}}
            columnWrapperStyle={{justifyContent: "space-around", marginBottom: 15}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <GameCover cover={item.cover} onPress={() => navigation.navigate("Details", {game: item})} />}
        />
    );
}

export default GameList;
