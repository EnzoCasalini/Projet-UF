import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import Svg, {Path} from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const arrowWidth = 40;
const arrowHeight = 40;
const horizontalPadding = 20;
const titleWidth = screenWidth - arrowWidth * 2 - horizontalPadding * 2;

const OtherPagesHeader = ({title, navigation}) => {

    return (
        <View style={styles.detailsHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{height: arrowHeight, width: arrowWidth, ...styles.shadow}}>
                        <Svg viewBox="0 0 1024 1024" fill="#C9FAE8">
                            <Path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" />
                        </Svg>
                    </View>
                </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsHeader: {
        height: 120,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#302F37",
        alignItems: "center",
        paddingHorizontal: horizontalPadding,
        opacity: 0.98,
        paddingTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    detailsHeaderContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        width: titleWidth,
        justifyContent: "center",
    },
    title: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
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

export default OtherPagesHeader;
