import {Image, StyleSheet, View} from 'react-native';

const platformIcons = {
    'PC': require('./assets/PcIcon.png'),
    'PlayStation': require('./assets/PlayStationIcon.png'),
    'Xbox': require('./assets/XboxIcon.png'),
    'Nintendo Switch': require('./assets/NintendoIcon.png'),
};

const GamePlatforms = ({platforms}) => {
    const iconsToDisplay = platforms.map((platform, index) => {
        const icon = platformIcons[platform];
        if (icon) {
            return (
                <View style={styles.iconContainer} key={index}>
                    <Image key={platform} source={icon} style={{width: '100%', height: '100%'}}/>
                </View>
            );
        }
        return null;
    });

    return <View style={styles.platformsContainer}>{iconsToDisplay}</View>;
}

const styles = StyleSheet.create({
    platformsContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});

export default GamePlatforms;
