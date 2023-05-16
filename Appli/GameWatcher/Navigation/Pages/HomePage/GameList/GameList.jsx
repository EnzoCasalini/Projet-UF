import {FlatList} from 'react-native';
import React, {useMemo} from "react";
import GameCover from "./GameCover/GameCover";

const GameList = ({games, searchText, sortOption, navigation}) => {

    const filteredGameList = useMemo(() => {
        let filteredGames = games;
        if (searchText) {
            filteredGames = games.filter((game) => game.name.toLowerCase().startsWith(searchText.trim().toLowerCase()));
        }
        else if (sortOption) {
            switch (sortOption) {
                case 'name_asc':
                    filteredGames = [...filteredGames].sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name_desc':
                    filteredGames = [...filteredGames].sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'date_asc':
                    filteredGames = [...filteredGames].sort((a, b) => new Date(b.released.split('/').reverse().join('-')) - new Date(a.released.split('/').reverse().join('-')));
                    break;
                case 'date_desc':
                    filteredGames = [...filteredGames].sort((a, b) => new Date(a.released.split('/').reverse().join('-')) - new Date(b.released.split('/').reverse().join('-')));
                    break;
                case 'platform_pc':
                    filteredGames = games.filter((game) => game.platforms.includes('PC'));
                    break;
                case 'platform_xbox':
                    filteredGames = games.filter((game) => game.platforms.includes('Xbox'));
                    break;
                case 'platform_playstation':
                    filteredGames = games.filter((game) => game.platforms.includes('PlayStation'));
                    break;
                case 'platform_switch':
                    filteredGames = games.filter((game) => game.platforms.includes('Nintendo Switch'));
                    break;
                default:
                    break;
            }
        }
        else {
            filteredGames = [...filteredGames].sort((a, b) => a.name.localeCompare(b.name));
        }
        return filteredGames;
    }, [searchText, games, sortOption]);

    return (
        <FlatList
            data={filteredGameList}
            numColumns={2}
            contentContainerStyle={{paddingBottom: 210}}
            columnWrapperStyle={{justifyContent: "space-around", marginBottom: 15}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <GameCover cover={item.background_image} onPress={() => navigation.navigate("Details", {game: item})} />}
        />
    );
}

export default GameList;
