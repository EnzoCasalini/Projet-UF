import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import {auth} from '../../../../firebaseConfig';
import {createUserWithEmailAndPassword} from "firebase/auth";

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
        setUsernameError('')
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        // Reset password
        setPassword('');
        setConfirmPassword('');

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
        if (!password) {
            setPasswordError('Veuillez entrer votre mot de passe');
            valid = false;
        }
        if (!confirmPassword) {
            setConfirmPasswordError('Veuillez confirmer votre mot de passe');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Le mot de passe doit contenir un minimum de 6 characteres');
        }
        if (password !== confirmPassword) {
            setPasswordError('Les mots de passe ne correspondent pas');
            valid = false;
        }

        // If form is valid, create the account
        if (valid) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }

    const goToLogin = () => navigation.navigate('Login');

    const goToHome = () => {
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
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
