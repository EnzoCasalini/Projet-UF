import React from 'react';
import { View } from 'react-native';
import Svg, {Path} from "react-native-svg";

const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const halfStars = Math.round(rating - filledStars);
    const emptyStars = 5 - filledStars - halfStars;
    const starsSize = 20;

    const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
        <View key={index} style={{height: starsSize, width: starsSize}}>
            <Svg viewBox="0 0 24 24" fill="#FF1313" fillRule="evenodd" clipRule="evenodd">
                <Path d="M10.8532 4.13112C11.2884 3.12751 12.7117 3.12752 13.1469 4.13112L15.1266 8.69665L20.0805 9.16869C21.1695 9.27246 21.6093 10.626 20.7893 11.3501L17.059 14.6438L18.1408 19.501C18.3787 20.5688 17.2272 21.4053 16.2853 20.8492L12 18.3193L7.71482 20.8492C6.77284 21.4053 5.62141 20.5688 5.85923 19.501L6.94111 14.6438L3.21082 11.3501C2.39082 10.626 2.83063 9.27246 3.91959 9.16869L8.87345 8.69665L10.8532 4.13112Z" />
            </Svg>
        </View>
    ));
    const halfStarIcons = Array.from({ length: halfStars }, (_, index) => (
        <View key={index} style={{height: starsSize, width: starsSize}}>
            <Svg viewBox="0 0 24 24" fill="#FF1313" fillRule="evenodd" clipRule="evenodd">
                <Path d="M13.1467 4.13112C12.7115 3.12752 11.2883 3.12751 10.8531 4.13112L8.87333 8.69665L3.91947 9.16869C2.83051 9.27246 2.3907 10.626 3.2107 11.3501L6.94099 14.6438L5.85911 19.501C5.62129 20.5688 6.77271 21.4053 7.7147 20.8492L11.9999 18.3193L16.2851 20.8492C17.2271 21.4053 18.3785 20.5688 18.1407 19.501L17.0588 14.6438L20.7891 11.3501C21.6091 10.626 21.1693 9.27246 20.0804 9.16869L15.1265 8.69665L13.1467 4.13112ZM12 15.9968L12.5083 16.2969L15.8125 18.2477L14.9783 14.5023L14.85 13.9261L15.2925 13.5353L18.1689 10.9956L14.3491 10.6316L13.7613 10.5756L13.5265 10.034L12 6.51388V15.9968Z"/>
            </Svg>
        </View>
    ));
    const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
        <View key={index} style={{height: starsSize, width: starsSize}}>
            <Svg viewBox="0 0 24 24" fill="transparent" fillRule="evenodd" clipRule="evenodd" stroke="#FF1313" strokeWidth="1">
                <Path d="M10.8532 4.13112C11.2884 3.12751 12.7117 3.12752 13.1469 4.13112L15.1266 8.69665L20.0805 9.16869C21.1695 9.27246 21.6093 10.626 20.7893 11.3501L17.059 14.6438L18.1408 19.501C18.3787 20.5688 17.2272 21.4053 16.2853 20.8492L12 18.3193L7.71482 20.8492C6.77284 21.4053 5.62141 20.5688 5.85923 19.501L6.94111 14.6438L3.21082 11.3501C2.39082 10.626 2.83063 9.27246 3.91959 9.16869L8.87345 8.69665L10.8532 4.13112Z" />
            </Svg>
        </View>
    ));


    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {filledStarIcons}
            {halfStarIcons}
            {emptyStarIcons}
        </View>
    );
};

export default StarRating;
