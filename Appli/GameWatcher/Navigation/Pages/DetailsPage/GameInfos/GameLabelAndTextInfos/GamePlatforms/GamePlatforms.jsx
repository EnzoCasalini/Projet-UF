import {Image, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";

const platformIcons = {
    'pc': require('./assets/PcIcon.png'),
    'playstation': require('./assets/PlayStationIcon.png'),
    'xbox': require('./assets/XboxIcon.png'),
    'switch': require('./assets/NintendoIcon.png'),
};

const GamePlatforms = ({platforms}) => {
    const [platformsToDisplay, setPlatformsToDisplay] = useState([]);

    useEffect(() => {
        if (platforms !== undefined) {
            const platformsData = platforms.map((platform) =>
                platform.platform.name.toLowerCase()
            );
            setPlatformsToDisplay(platformsData);
        }
    }, [platforms]);

    const iconsToDisplay = Object.keys(platformIcons).map((iconKey, index) => {
        for (let platform of platformsToDisplay) {
            if (platform.includes(iconKey)) {
                return (
                    <View style={styles.iconContainer} key={index}>
                        <Image source={platformIcons[iconKey]} style={{width: '100%', height: '100%'}}/>
                    </View>
                );
            }
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
