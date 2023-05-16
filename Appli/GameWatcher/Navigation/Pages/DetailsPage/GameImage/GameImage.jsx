import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from "react";

const GameImage = ({cover}) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{
                    uri: cover,
                }}
                style={[styles.image]}
                resizeMode={'cover'} // Potentiellement ça à enlever / remettre en 'cover' pour adapter la taille de l'image.
            />
            <Image source={require('../assets/mask.png')} style={styles.mask} />
        </View>
    );
}


const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: height * 0.65,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    mask: {
        position: 'absolute',
        width: '100%',
        height: '30%',
        bottom: 0,
    },
});



export default GameImage;
