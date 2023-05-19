import {ActivityIndicator, FlatList} from 'react-native';
import React, {useContext} from "react";
import GameCover from "./GameCover/GameCover";
import gamesContext from "../../../../gamesContext";

const GameList = ({navigation}) => {
    const { games, fetchMoreGames, isLoading } = useContext(gamesContext);

    return (
        <>
            <FlatList
                data={games}
                numColumns={2}
                contentContainerStyle={{paddingBottom: 210}}
                columnWrapperStyle={{justifyContent: "space-around", marginBottom: 15}}
                keyExtractor={item => item.id}
                renderItem={({item}) => <GameCover cover={item.background_image} onPress={() => navigation.navigate("Details", {game: item})} />}
                onEndReached={fetchMoreGames}
                onEndReachedThreshold={0.5}
                ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#C9FAE8" style={{paddingTop: 20}} /> : null}
            />
        </>
    );
}

export default GameList;
