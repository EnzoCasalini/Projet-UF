import {StyleSheet, Text, View} from 'react-native';

const FilterButton = () => {
    return (
        <View style={styles.filterButton}>

        </View>
    );
}

const styles = StyleSheet.create({
    filterButton: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#C9FAE8',
        borderRadius: 10,
        padding: 10,
    },
});

export default FilterButton;
