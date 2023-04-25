import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import GameList from "./GameList/GameList";
import SearchBar from "./SearchBar/SearchBar";
import FilterButton from "./FilterButton/FilterButton";
import gamesContext from "../../../gamesContext";

const HomePage = ({navigation}) => {
    const { games } = useContext(gamesContext);

    const [searchText, setSearchText] = useState('')
    const [sortOption, setSortOption] = useState('');

    const handleSearchText = (search) => {
        setSearchText(search);
        setSortOption('');
    }

    const onSort = (option) => {
        setSortOption(option);
        setSearchText('');
    }

    return (
        <View style={styles.gamesContainer}>
            <View style={styles.searchContainer}>
                <SearchBar searchText={searchText} onSearch={handleSearchText}/>
                <FilterButton onSort={onSort}/>
            </View>
            <GameList games={games} searchText={searchText} sortOption={sortOption} navigation={navigation}/>
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
