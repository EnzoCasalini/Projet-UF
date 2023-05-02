import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notification = () => {
    return (
        <View>
            <Ionicons name="notifications-outline" size={30} color="#C9FAE8" style={styles.shadow}/>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});

export default Notification;
