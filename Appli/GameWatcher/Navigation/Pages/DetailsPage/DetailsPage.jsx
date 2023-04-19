import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import StarRating from "./StarRating/StarRating";

const DetailsPage = ({ route }) => {

    const { game } = route.params;

    return (
        <View style={styles.game}>
            <Text style={styles.gameName}>
                {game.name}
            </Text>
            <Image
                source={{
                    uri: game.cover,
                }}
                style={styles.gameImage}
            />
            <View style={styles.gameInfosContainer}>
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: "bold"}}>Description : </Text>
                    <Text>game.description</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: "bold"}}>Release Date :</Text>
                    <Text>{game.releaseDate}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: "bold"}}>Price : </Text>
                    <Text>{game.price !== "Gratuit" ? `${game.price} €` : `${game.price}` }</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{fontWeight: "bold"}}>Rating : </Text>
                    <StarRating rating={game.rating}/>
                </View>
            </View>
        </View>
    );
};


const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    game: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gameName: {
        fontSize: 30,
        fontWeight: "semibold",
        marginVertical: 20,
    },
    gameImage: {
        width: 250,
        height: 350,
        borderRadius: 10,
        marginBottom: 20,
    },
    gameInfosContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
    },
    textContainer: {
        display: "flex",
        flexDirection: "row",
    }
});

export default DetailsPage;
