import {Dimensions, Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";


const GameCover = ({cover, onPress}) => (
    <TouchableOpacity style={styles.game} onPress={onPress}>
        <Image
            source={{
                uri: cover,
            }}
            style={styles.image}
        />
    </TouchableOpacity>
);

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    game: {
        width: width / 2 - 16,
        height: height / 4,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    }
});

export default GameCover;