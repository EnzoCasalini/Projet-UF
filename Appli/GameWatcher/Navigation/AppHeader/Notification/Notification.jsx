import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Notifications from "expo-notifications";

const Notification = () => {
    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Super useful notification",
                body: "This is a very, very, very interesting notification.",
                data: { mySpecialData: 'Some text' },
            },
            trigger: null,
        });
    };


    return (
        <TouchableOpacity onPress={triggerNotificationHandler}>
            <Ionicons name="notifications-outline" size={30} color="#C9FAE8" style={styles.shadow}/>
        </TouchableOpacity>
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
