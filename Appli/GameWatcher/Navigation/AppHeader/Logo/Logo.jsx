import {Image, View, StyleSheet} from 'react-native';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/GameWatcherLogo.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 80,
        resizeMode: 'contain',
    },
});

export default Logo;
