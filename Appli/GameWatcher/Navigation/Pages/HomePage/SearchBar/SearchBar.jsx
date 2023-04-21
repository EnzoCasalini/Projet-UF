import {StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";

const SearchBar = ({ searchText, onSearch }) => {

    const [borderColor, setBorderColor] = useState('#C9FAE8');

    const handleFocus = () => {
        setBorderColor('#4EF5B9');
    };

    const handleBlur = () => {
        setBorderColor('#C9FAE8');
    };

    return (
        <View style={[styles.searchBar, styles.shadow ,{borderColor: borderColor}]}>
            <TextInput
                placeholder="Rechercher un jeu..."
                value={searchText}
                onChangeText={onSearch}
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
