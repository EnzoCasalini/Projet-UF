import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { Header, Icon } from '@rneui/themed';

export default class CustomHeader extends React.Component {
    openAccount = () => {
    }

    openNotifications = () => {

    }

    render() {
        return (
            <Header
                containerStyle={ styles.headerContainer }
                rightComponent={
                <View style={ styles.headerRight}>
                    <TouchableOpacity onPress={this.openNotifications}>
                        <Icon name='notifications' type='material' color='#fff' size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openAccount}>
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
        )
    }
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
