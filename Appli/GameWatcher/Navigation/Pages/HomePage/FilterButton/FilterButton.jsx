import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, {Path} from "react-native-svg";

const FilterButton = ({ onSort }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSort = (option) => {
        setModalVisible(false);
        onSort(option);
    };

    const options = [
        { name: 'Nom [A-Z]', value: 'name_asc' },
        { name: 'Nom [Z-A]', value: 'name_desc' },
        { name: 'Date de sortie [+ récent]', value: 'date_asc' },
        { name: 'Date de sortie [+ ancien]', value: 'date_desc' },
        { name: 'Plateforme (PC)', value: 'platform_pc' },
        { name: 'Plateforme (Xbox)', value: 'platform_xbox' },
        { name: 'Plateforme (Playstation)', value: 'platform_playstation' },
        { name: 'Plateforme (Switch)', value: 'platform_switch' },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
                <Svg fill="#C9FAE8" viewBox="0 0 40 40" strokeLinecap="round" strokeLinejoin="round" width={30} height={30} style={styles.shadow}>
                   <Path d="M12,25l6.67,6.67a1,1,0,0,0,.7.29.91.91,0,0,0,.39-.08,1,1,0,0,0,.61-.92V13.08L31.71,1.71A1,1,0,0,0,31.92.62,1,1,0,0,0,31,0H1A1,1,0,0,0,.08.62,1,1,0,0,0,.29,1.71L11.67,13.08V24.33A1,1,0,0,0,12,25ZM3.41,2H28.59l-10,10a1,1,0,0,0-.3.71V28.59l-4.66-4.67V12.67a1,1,0,0,0-.3-.71Z" />
                </Svg>
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
                                <Text style={[styles.optionText, styles.shadow]}>{option.name}</Text>
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
        backgroundColor: '#242429',
        borderWidth: 1,
        borderColor: '#4EF5B9',
        position: 'absolute',
        top: '16%',
        right: 16,
        width: '60%',
        borderRadius: 10,
        margin: 20,
        padding: 10,
    },
    optionButton: {
        padding: 10,
    },
    optionText: {
        fontSize: 18,
        color: '#C9FAE8',
    },
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
});

export default FilterButton;
