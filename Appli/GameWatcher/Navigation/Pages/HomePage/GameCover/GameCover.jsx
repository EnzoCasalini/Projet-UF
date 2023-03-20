import {Dimensions, Image, StyleSheet, View} from "react-native";
import React from "react";


const GameCover = ({cover}) => (
    <View style={styles.game}>
        <Image
            source={{
                uri: cover,
            }}
            style={styles.image}
        />
    </View>
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