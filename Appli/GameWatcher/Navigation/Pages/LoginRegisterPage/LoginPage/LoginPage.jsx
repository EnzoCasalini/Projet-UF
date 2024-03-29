import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable, Image} from 'react-native';
import {auth} from '../../../../firebaseConfig' ;
import {signInWithEmailAndPassword} from "firebase/auth";

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [focusedField, setFocusedField] = useState(null);


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

    const handleFocus = (field) => {
        switch (field) {
            case 'email':
                setEmailError('');
                break;
            case 'password':
                setPasswordError('');
                break;
            default:
                break;
        }
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
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
            <View style={[styles.loginInputContainer, {borderColor: focusedField === 'email' ? '#4EF5B9' : '#C9FAE8'}, emailError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setEmail}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{emailError}</Text>
            <View style={[styles.loginInputContainer, {borderColor: focusedField === 'password' ? '#4EF5B9' : '#C9FAE8'}, passwordError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setPassword}
                    onFocus={() => handleFocus('password')}
                    onBlur={handleBlur}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{passwordError}</Text>
            <Pressable style={[styles.loginButton, styles.shadow]} onPress={handleLogin}>
                <Text style={{color: '#242429'}}>Login</Text>
            </Pressable>
            <View style={styles.loginBottomContainer}>
                <Pressable style={styles.loginBottomButton} onPress={goToRegister}>
                    <Text style={styles.linkButton}>Create an account</Text>
                </Pressable>
                <Pressable style={styles.loginBottomButton} onPress={goToHome}>
                    <Text style={styles.linkButton}>Continue as a guest</Text>
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
        paddingHorizontal: 30,
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
