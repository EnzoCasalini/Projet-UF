import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import {auth} from '../../../../firebaseConfig' ;
import {signInWithEmailAndPassword} from "firebase/auth";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Reset all errors
        setEmailError('');
        setPasswordError('');
        // Reset password
        setPassword('');

        // Validate form
        let valid = true;
        if (!email) {
            setEmailError('Veuillez entrer votre email');
            valid = false;
        }
        if (!password) {
            setPasswordError('Veuillez entrer votre mot de passe');
            valid = false;
        }

        // If form is valid, create the account
        if (valid) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Home'}],
                    });
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }

    const goToRegister = () => navigation.navigate('Register');

    const goToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
        });
    }

    return (
        <View style={styles.loginPage}>
            <Text style={styles.loginTitle}>Connexion</Text>
            <TextInput
                style={[styles.loginInput, passwordError && styles.loginInputError]}
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
            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text>Se connecter</Text>
            </Pressable>
            <View style={styles.loginBottomContainer}>
                <Pressable style={styles.loginBottomButton} onPress={goToRegister}>
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

export default LoginPage;
