import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";

const SearchBar = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState('#C9FAE8');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setBorderColor('#4EF5B9');
        setIsFocused(true);
    };

    const handleBlur = () => {
        setBorderColor('#C9FAE8');
        setIsFocused(false);
    };

    const handleSearch = (text) => {
        setSearch(text);
        onSearch(text);
    }

    return (
        <View style={[styles.searchBar, styles.shadow ,{borderColor: borderColor}]}>
            <TextInput
                placeholder="Rechercher un jeu..."
                value={search}
                onChangeText={handleSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholderTextColor="#7E8A84"
                selectionColor="#4EF5B9"
                style={styles.textInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        width: '85%',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#242429',
    },
    textInput: {
        color: '#C9FAE8',
        fontSize: 16,
    },
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
});

export default SearchBar;
