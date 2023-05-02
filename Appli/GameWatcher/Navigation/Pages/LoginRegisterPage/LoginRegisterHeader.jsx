import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, SafeAreaView} from "react-native";
import {Header, Icon} from '@rneui/themed';
import {SafeAreaProvider} from "react-native-safe-area-context";

const CustomLoginRegisterHeader = () => {
    return (
        <Header
            containerStyle={styles.headerContainer}
            rightComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Icon name='notifications' type='material' color='#fff' size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='person' type='material' color='#fff' size={20}/>
                    </TouchableOpacity>
                </View>
            }
            centerComponent={
                <Text style={styles.headerTitle}>
                    GameWatcher
                </Text>
            }
        />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        width: '100%',
        paddingVertical: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    }
});
export default CustomLoginRegisterHeader;
