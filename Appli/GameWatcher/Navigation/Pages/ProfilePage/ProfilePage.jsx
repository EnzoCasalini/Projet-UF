import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {auth, database} from '../../../firebaseConfig';
import {onValue, ref} from 'firebase/database';
import loading from '../../../assets/loading.gif'

const ProfilePage = ({navigation}) => {
    if (auth.currentUser) {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [image, setImage] = useState(loading);

        //Retrieve user data in firebase
        useEffect(() => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                const userRef = ref(database, 'utilisateurs/' + userId);
                onValue(userRef, (snapshot) => {
                    const userData = snapshot.val();
                    if (userData) {
                        if (userData.image) {
                            setImage(userData.image);
                        }
                        if (userData.username) {
                            setUsername(userData.username);
                        }
                        if (userData.email) {
                            setEmail(userData.email);
                        }
                    }
                });
            }
        }, []);

        return (
            <View style={styles.background}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={{uri: `${image}`}}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>
                        Nom d'utilisateur :
                    </Text>
                    <Text style={styles.infoContent}>
                        {username}
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>
                        Adresse email :
                    </Text>
                    <Text style={styles.infoContent}>
                        {email}
                    </Text>
                </View>
                <Pressable style={styles.modificationButton} onPress={() => navigation.navigate('ProfileEdit')}>
                    <Text>Modifier les informations</Text>
                </Pressable>
            </View>);
    } else {
        return (
            <View style={styles.background}>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>
                        Utilisateur non connecté
                    </Text>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#242429',
        padding: 20,
    },
    profileImageContainer: {
        alignSelf: 'center',
        aspectRatio: 1,
        width: 110,
        height: 110,
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 100,
        borderColor: 'black',
    },
    profileImage: {
        aspectRatio: 1,
        width: 100,
        borderRadius: 100,
    },
    infoContainer: {
        margin: 10,
    },
    infoTitle: {
        color: 'white',
    },
    infoContent: {
        margin: 10,
        color: 'white',
    },
    modificationButton: {
        color: 'white',
        margin: 10,
        padding: 10,
        width: '60%',
        borderRadius: 20,
        backgroundColor: 'orange',
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default ProfilePage;
