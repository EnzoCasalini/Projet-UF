import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import GamePlatforms from "./GamePlatforms/GamePlatforms";
import RenderHtml from 'react-native-render-html';

const GameLabelAndTextInfos = ({description, releaseDate, platforms}) => {
    return (
        <View>
            <Text style={styles.label}>
                Description : {''}
            </Text>
            {description && <RenderHtml contentWidth={300} source={{html: description}} baseStyle={styles.description}/>}
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
    },
    description: {
        color: '#ffffff',
    }
});

export default GameLabelAndTextInfos;
