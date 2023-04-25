import {Text, View, StyleSheet} from 'react-native';

const Logo = ({title}) => {
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: "center",
    }
});

export default Logo;
