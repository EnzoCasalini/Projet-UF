import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import GamePlatforms from "./GamePlatforms/GamePlatforms";

const GameLabelAndTextInfos = ({description, releaseDate, platforms}) => {
    return (
        <View>
            <Text style={styles.infoText}>
                <Text style={styles.label}>
                    Description : {''}
                </Text>
                {description}
            </Text>
            <Text style={styles.infoText}>
                <Text style={styles.label}>
                    Release Date : {''}
                </Text>
                {releaseDate}
            </Text>
            <Text style={styles.infoText}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>
                        Platforms : {' '}
                    </Text>
                    <GamePlatforms platforms={platforms} />
                </View>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    infoText: {
        color: '#ffffff',
        marginTop: 10,
        fontSize: 15,
        textAlign: 'left',
    }
});

export default GameLabelAndTextInfos;
