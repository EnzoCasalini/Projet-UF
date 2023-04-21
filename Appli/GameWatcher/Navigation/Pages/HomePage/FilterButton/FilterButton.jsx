import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FilterButton = ({ onSort }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSort = (option) => {
        setModalVisible(false);
        onSort(option);
    };

    const options = [
        { name: 'Nom (ordre alphabétique)', value: 'name_asc' },
        { name: 'Nom (inverse)', value: 'name_desc' },
        { name: 'Date de sortie (croissant)', value: 'date_asc' },
        { name: 'Date de sortie (décroissant)', value: 'date_desc' },
        { name: 'Plateforme (PC)', value: 'platform_pc' },
        { name: 'Plateforme (Xbox)', value: 'platform_xbox' },
        { name: 'Plateforme (Playstation)', value: 'platform_playstation' },
        { name: 'Plateforme (Switch)', value: 'platform_switch' },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.filterButton}></Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalBackground}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={styles.optionButton}
                                onPress={() => handleSort(option.value)}
                            >
                                <Text style={styles.optionText}>{option.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButton: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#C9FAE8',
        borderRadius: 10,
        padding: 10,
    },
    button: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 20,
        padding: 10,
    },
    optionButton: {
        padding: 10,
    },
    optionText: {
        fontSize: 18,
    },
});

export default FilterButton;
