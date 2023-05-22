import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import {auth, database} from '../../../../firebaseConfig';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {ref, set} from "firebase/database";

const RegisterPage = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleRegister = () => {
        // Reset all errors
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        // Reset password
        setPassword('');
        setConfirmPassword('');

        const isEmailValid = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            return emailRegex.test(email);
        };

        // Validate form
        let valid = true;
        if (!username) {
            setUsernameError('Veuillez entrer votre nom d\'utilisateur');
            valid = false;
        }
        if (!email) {
            setEmailError('Veuillez entrer votre email');
            valid = false;
        }
        else if (!isEmailValid(email)) {
            setEmailError('L\'email n\'a pas un format valide');
            valid = false;
        }
        if (!password) {
            setPasswordError('Veuillez entrer votre mot de passe');
            valid = false;
        }
        if (!confirmPassword) {
            setConfirmPasswordError('Veuillez confirmer votre mot de passe');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Le mot de passe doit contenir un minimum de 6 characteres');
            valid = false;
        }
        if (password !== confirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            valid = false;
        }

        // If form is valid, create the account
        if (valid) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    const userId = auth.currentUser.uid;
                    console.log(userId);
                    const userRef = ref(database, 'utilisateurs/' + userId);
                    set(userRef, {
                        username: username,
                        email: email,
                        // default-profile-picture.png in base64
                        image: 'data:image/png;base64,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'
                    }).then(() => {
                        navigation.navigate('Login');
                    }).catch((error) => {
                        alert(error.message);
                    });
                }).catch((error) => {
                    alert(error.message);
                });
        }
    }

    const goToLogin = () => navigation.navigate('Login');

    const goToHome = () => {
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
        });
    }

    return (
        <View style={styles.loginPage}>
            <Text style={styles.loginTitle}>Inscription</Text>
            <TextInput
                style={[styles.loginInput, usernameError && styles.loginInputError]}
                onChangeText={setUsername}
                value={username}
                placeholder="Nom d'utilisateur"
            />
            <Text style={styles.loginError}>{usernameError}</Text>
            <TextInput
                style={[styles.loginInput, emailError && styles.loginInputError]}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
            />
            <Text style={styles.loginError}>{emailError}</Text>
            <TextInput
                style={[styles.loginInput, passwordError && styles.loginInputError]}
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
                placeholder="Mot de passe"
            />
            <Text style={styles.loginError}>{passwordError}</Text>
            <TextInput
                style={[styles.loginInput, confirmPasswordError && styles.loginInputError]}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                value={confirmPassword}
                placeholder="Confirmer le mot de passe"
            />
            <Text style={styles.loginError}>{confirmPasswordError}</Text>
            <Pressable style={styles.loginButton} onPress={handleRegister}>
                <Text>Se connecter</Text>
            </Pressable>
            <View style={styles.loginBottomContainer}>
                <Pressable style={styles.loginBottomButton} onPress={goToLogin}>
                    <Text>Creer un compte</Text>
                </Pressable>
                <Pressable style={styles.loginBottomButton} onPress={goToHome}>
                    <Text>Continuer en tant qu'invité</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginPage: {
        paddingTop: 40,
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    loginTitle: {
        margin: 50,
    },
    loginInput: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
    },
    loginInputError: {
        borderColor: 'red',
    },
    loginError: {
        color: 'red',
        fontSize: 12,
        height: 12,
        marginTop: -10,
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
        margin: 50,
    },
    loginBottomContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 75,
    },
    loginBottomButton: {
        padding: 5,
    },
});


export default RegisterPage;
