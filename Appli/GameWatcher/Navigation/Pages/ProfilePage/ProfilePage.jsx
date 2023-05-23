import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {auth, database} from '../../../firebaseConfig';
import {signOut} from 'firebase/auth';
import {onValue, ref} from 'firebase/database';
import loading from '../../../assets/loading.gif'

const ProfilePage = ({navigation}) => {
    if (auth.currentUser) {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [image, setImage] = useState(loading);

        const handleLogout = () => {
            signOut(auth)
                .then(() => {
                    // Déconnexion réussie
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    // Gestion des erreurs lors de la déconnexion
                    console.log('Erreur lors de la déconnexion :', error.message);
                });
        }

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
                        Username :
                    </Text>
                    <Text style={styles.infoContent}>
                        {username}
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>
                        E-mail :
                    </Text>
                    <Text style={styles.infoContent}>
                        {email}
                    </Text>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Pressable style={styles.modificationButton} onPress={() => navigation.navigate('ProfileEdit')}>
                        <Text style={{color: '#242429'}}>Edit your profile</Text>
                    </Pressable>
                    <Pressable style={styles.modificationButton} onPress={handleLogout}>
                        <Text style={{color: '#242429'}}>Log out</Text>
                    </Pressable>
                </View>
            </View>);
    } else {
        return (
            <View style={styles.background}>
                <View style={styles.loginMessageContainer}>
                    <Text style={styles.loginMessageText}>You need to connect to use this functionality</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.loginLink}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
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
        borderWidth: 3,
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
        alignItems: 'center',
        backgroundColor: '#4EF5B9',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '50%',
    },
    loginMessageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        paddingTop: "70%",
        paddingHorizontal: "10%",
        alignItems: "center",
    },
    loginMessageText: {
        color: "#C9FAE8",
        fontSize: 18,
        textAlign: "center",
    },
    loginLink: {
        color: '#4EF5B9',
        fontSize: 16,
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});

export default ProfilePage;
