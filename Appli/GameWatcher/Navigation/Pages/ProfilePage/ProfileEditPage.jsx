import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {auth, database} from '../../../firebaseConfig';
import {updateEmail, updatePassword} from "firebase/auth";
import {onValue, ref, update, get} from 'firebase/database';
import * as ImagePicker from "expo-image-picker";
import {manipulateAsync} from 'expo-image-manipulator';
import loading from '../../../assets/loading.gif'

const ProfileEditPage = () => {
    const [image, setImage] = useState(loading);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [imageError, setImageError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [changeStatus, setChangeStatus] = useState(null);

    // Gérer la modification des informations utilisateur
    const handleChanges = async () => {
        // Reset all errors
        setImageError('');
        setEmailError('');
        setPasswordError('');
        // Reset password
        setPassword('');
        setConfirmPassword('');

        const isEmailValid = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            return emailRegex.test(email);
        };

        // Validate form
        let valid = true;
        if (email !== '' && !isEmailValid(email)) {
            setEmailError('L\'email n\'a pas un format valide');
            valid = false;
        }
        if (password !== '' && password.length < 6) {
            setPasswordError('Le mot de passe doit contenir un minimum de 6 characteres');
            valid = false;
        }
        if (password !== confirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            valid = false;
        }

        // If form is valid, create the account
        if (valid) {
            const userId = auth.currentUser.uid;
            const userRef = ref(database, 'utilisateurs/' + userId);
            const snapshot = await get(userRef);
            const userData = snapshot.val();
            try {
                if (image !== userData.image) {
                    update(userRef, {image: image})
                        .catch((error) => {
                            console.log('Erreur lors de la mise à jour de l\'image:', error);
                        });
                }

                if (username !== '' && username !== userData.username) {
                    update(userRef, {username: username})
                        .catch((error) => {
                            console.log('Erreur lors de la mise à jour du nom d\'utilisateur:', error);
                        });
                }

                if (email !== '' && email !== userData.email) {
                    if (email !== userData.email) {
                        await updateEmail(auth.currentUser, email)
                            .catch((error) => {
                                console.log('Erreur lors de la mise à jour de l\'email de l\'authentification:', error);
                            });
                    }

                    if (email !== userData.email) {
                        await update(userRef, {email: email})
                            .catch((error) => {
                                console.log('Erreur lors de la mise à jour de l\'email de l\'utilisateur:', error);
                            });
                    }
                }

                if (password !== '') {
                    updatePassword(auth.currentUser, password)
                        .catch((error) => {
                            console.log('Erreur lors de la mise à jour du mot de passe:', error);
                        });
                }

                setChangeStatus('Modifications effectuées avec succès');
            } catch (error) {
                setChangeStatus('Une erreur s\'est produite lors des modifications');
            }
        }
    };


    // Gérer la sélection d'une nouvelle image de profil
    const selectImageFromGallery = async () => {
        setImageError('');

        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            setImageError('Permission refusée');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled) {
            const resizedImage = await manipulateAsync(result.assets[0].uri, [{resize: {width: 200, height: 200}}]);
            setImage(resizedImage.uri);
        }
    };

    // Retrieve user data in firebase
    useEffect(() => {
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
    }, []);

    return (
        <View style={styles.background}>
            {changeStatus && (
                <View
                    style={[styles.changeStatus, changeStatus.includes('erreur') ? styles.errorBox : styles.successBox]}>
                    <Text>
                        {changeStatus}
                    </Text>
                </View>
            )}
            <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                    <Image source={{uri: `${image}`}} style={styles.profileImage}/>
                </View>
                <Pressable style={styles.imageSelectionButton} onPress={selectImageFromGallery}>
                    <Text style={{color: '#242429'}}>Change profile picture</Text>
                </Pressable>
            </View>
            <Text style={styles.textError}>{imageError}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username :</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setUsername}
                    placeholder={username}
                    placeholderTextColor="gray"
                />
            </View>
            <Text style={styles.textError}></Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>E-mail :</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setEmail}
                    placeholder={email}
                    placeholderTextColor="gray"
                />
                <Text style={styles.textError}>{emailError}</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>New Password :</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                />
                <Text style={styles.textError}>{passwordError}</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm password :</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    placeholderTextColor="gray"
                />
                <Text style={styles.textError}></Text>
            </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
                <Pressable style={styles.saveChangesButton} onPress={handleChanges}>
                    <Text style={{color: '#242429'}}>Save changes</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#242429',
        padding: 20,
    },
    changeStatus: {
        textAlign: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    errorBox: {
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
    successBox: {
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImageContainer: {
        aspectRatio: 1,
        width: 110,
        height: 110,
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 100,
        borderColor: 'black',
    },
    profileImage: {
        flex: 1,
        borderRadius: 100,
    },
    imageSelectionButton: {
        alignItems: 'center',
        backgroundColor: '#4EF5B9',
        marginTop: 10,
        marginLeft: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
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
    inputError: {
        borderColor: 'red',
    },
    textError: {
        color: 'red',
        fontSize: 12,
        height: 12,
        marginTop: 10,
    },
    saveChangesButton: {
        alignItems: 'center',
        backgroundColor: '#4EF5B9',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '50%',
    },
});

export default ProfileEditPage;
