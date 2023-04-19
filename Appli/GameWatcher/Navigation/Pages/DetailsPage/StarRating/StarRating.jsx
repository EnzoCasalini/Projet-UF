import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const halfStars = Math.round(rating - filledStars);
    const emptyStars = 5 - filledStars - halfStars;

    const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
        <Ionicons key={index} name="star" color="#004A8A" />
    ));
    const halfStarIcons = Array.from({ length: halfStars }, (_, index) => (
        <Ionicons key={index} name="star-half" color="#004A8A" />
    ));
    const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
        <Ionicons key={index} name="star-outline" color="#004A8A" />
    ));


    return (
        <View style={{ flexDirection: 'row' }}>
            {filledStarIcons}
            {halfStarIcons}
            {emptyStarIcons}
        </View>
    );
};

export default StarRating;
