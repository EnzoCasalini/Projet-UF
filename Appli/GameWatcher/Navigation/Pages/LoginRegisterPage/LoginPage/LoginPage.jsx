import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable, Image} from 'react-native';
import {auth} from '../../../../firebaseConfig' ;
import {signInWithEmailAndPassword} from "firebase/auth";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [borderColor, setBorderColor] = useState('#C9FAE8');


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

    const handleFocus = () => {
        setEmailError('');
        setPasswordError('');
        setBorderColor('#4EF5B9');
    };

    const handleBlur = () => {
        setBorderColor('#C9FAE8');
    };

    const goToRegister = () => navigation.navigate('Register');

    const goToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
        });
    }

    return (
        <View style={styles.loginPage}>
            <Text style={styles.loginTitle}>Sign In</Text>
            <View style={[styles.loginInputContainer, styles.shadow ,{borderColor: borderColor}, emailError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setEmail}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{emailError}</Text>
            <View style={[styles.loginInputContainer, styles.shadow ,{borderColor: borderColor}, passwordError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setPassword}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Mot de passe"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{passwordError}</Text>
            <Pressable style={[styles.loginButton, styles.shadow]} onPress={handleLogin}>
                <Text style={{color: '#242429'}}>Se connecter</Text>
            </Pressable>
            <View style={styles.loginBottomContainer}>
                <Pressable style={styles.loginBottomButton} onPress={goToRegister}>
                    <Text style={styles.linkButton}>Créer un compte</Text>
                </Pressable>
                <Pressable style={styles.loginBottomButton} onPress={goToHome}>
                    <Text style={styles.linkButton}>Continuer en tant qu'invité</Text>
                </Pressable>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/GameWatcherFooter.png')} style={styles.logo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginPage: {
        paddingTop: 100,
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#302F37',
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#C9FAE8',
        marginBottom: 20,
    },
    loginInputContainer: {
        width: '80%',
        height: 40,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    loginInput: {
        color: '#C9FAE8',
        fontSize: 16,
    },
    loginInputError: {
        borderColor: 'red',
    },
    loginError: {
        color: 'red',
        fontSize: 12,
        height: 12,
        marginTop: 5,
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#4EF5B9',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    loginBottomContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    loginBottomButton: {
        padding: 5,
    },
    linkButton: {
      color: "#C9FAE8",
    },
    logoContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '60%',
        backgroundColor: '#242429',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    shadow: {
        shadowColor: "#4EF5B9",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
});

export default LoginPage;
