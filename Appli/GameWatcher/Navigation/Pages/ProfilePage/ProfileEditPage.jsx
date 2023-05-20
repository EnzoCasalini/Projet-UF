import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {auth, database} from '../../../firebaseConfig';
import {onValue, ref} from 'firebase/database';
import * as ImagePicker from "expo-image-picker";

// Convertir une image en base64
const convertImageToBase64 = async (imageUri) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

// Gérer la sélection d'une nouvelle image de profil
const selectImageFromGallery = async () => {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permission denied');
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
        const base64Image = await convertImageToBase64(result.uri);
        setImage(base64Image);
    }
};

const ProfileEditPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    // Retrieve user data in firebase
    useEffect(() => {
        const userId = auth.currentUser.uid;
        const userRef = ref(database, 'utilisateurs/' + userId);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                if (userData.username) {
                    setUsername(userData.username);
                }
                if (userData.email) {
                    setEmail(userData.email);
                }
                if (userData.image) {
                    setImage(userData.image);
                }
            }
        });
    }, []);

    // Gérer la modification des informations utilisateur
    const handleSaveChanges = () => {
        // Effectuer les opérations de sauvegarde des modifications dans Firebase
        // ...

        // Naviguer vers une autre page (par exemple, la page de profil)
        // ...
    };

    return (
        <View style={styles.background}>
            <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                    <Image source={{uri: `data:image/png;base64,${image}`}} style={styles.profileImage}/>
                </View>
                <Pressable style={styles.imageSelectionButton} onPress={selectImageFromGallery}>
                    Changer d'image
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nom d'utilisateur:</Text>
                <TextInput
                    style={styles.inputField}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor="gray"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Adresse e-mail:</Text>
                <TextInput
                    style={styles.inputField}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Adresse e-mail"
                    placeholderTextColor="gray"
                />
            </View>
            <Pressable style={styles.saveChangesButton} onPress={handleSaveChanges}>
                Sauvegarder les modifications
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        display: 'flex',
        backgroundColor: '#242429',
        padding: '20px',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImageContainer: {
        aspectRatio: 1,
        width: 110,
        height: 110,
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 100,
        borderColor: 'black',
    },
    profileImage: {
        flex: 1,
        borderRadius: 100,
    },
    imageSelectionButton: {
        marginLeft: 20,
        color: 'white',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'orange',
        alignSelf: 'center',
        textAlign: 'center',
    },
    inputContainer: {
        marginVertical: 10,
    },
    inputLabel: {
        color: 'white',
        marginBottom: 5,
    },
    inputField: {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    saveChangesButton: {
        color: 'white',
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'orange',
        alignSelf: 'center',
        textAlign: 'center',
    },
});

export default ProfileEditPage;
