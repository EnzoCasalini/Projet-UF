import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import GameList from "./GameList/GameList";
import SearchBar from "./SearchBar/SearchBar";
import FilterButton from "./FilterButton/FilterButton";

const HomePage = ({navigation}) => {
    const [searchText, setSearchText] = useState('')

    const handleSearchText = (search) => {
        setSearchText(search);
    }

    return (
        <View style={styles.gamesContainer}>
            <View style={styles.searchContainer}>
                <SearchBar searchText={searchText} onSearch={handleSearchText}/>
                <FilterButton/>
            </View>
            <GameList searchText={searchText} navigation={navigation}/>
        </View>
    );
};


const styles = StyleSheet.create({
    gamesContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        paddingHorizontal: 16,
        zIndex: 1,
        backgroundColor: "#242429"
    },
    searchContainer: {
        marginVertical: 16,
        marginHorizontal: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default HomePage;
