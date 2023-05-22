import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Pressable, Image} from 'react-native';
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

    const [focusedField, setFocusedField] = useState(null);


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

    const handleFocus = (field) => {
        switch (field) {
            case 'username':
                setUsernameError('');
                break;
            case 'email':
                setEmailError('');
                break;
            case 'password':
                setPasswordError('');
                break;
            case 'confirmPassword':
                setConfirmPasswordError('');
                break;
            default:
                break;
        }
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    return (
        <View style={styles.loginPage}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/GameWatcherHeader.png')} style={styles.logo} />
            </View>
            <Text style={styles.loginTitle}>Register</Text>
            <View style={[styles.loginInputContainer, {borderColor: focusedField === 'username' ? '#4EF5B9' : '#C9FAE8'}, usernameError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setUsername}
                    onFocus={() => handleFocus('username')}
                    onBlur={handleBlur}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{usernameError}</Text>
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
            <View style={[styles.loginInputContainer, {borderColor: focusedField === 'confirmPassword' ? '#4EF5B9' : '#C9FAE8'}, confirmPasswordError && styles.loginInputError]}>
                <TextInput
                    style={styles.loginInput}
                    onChangeText={setConfirmPassword}
                    onFocus={() => handleFocus('confirmPassword')}
                    onBlur={handleBlur}
                    secureTextEntry={true}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    placeholderTextColor="#7E8A84"
                    selectionColor="#4EF5B9"
                />
            </View>
            <Text style={styles.loginError}>{confirmPasswordError}</Text>
            <Pressable style={[styles.loginButton, styles.shadow]} onPress={handleRegister}>
                <Text>Register</Text>
            </Pressable>
            <View style={styles.loginBottomContainer}>
                <Pressable style={styles.loginBottomButton} onPress={goToLogin}>
                    <Text style={styles.linkButton}>Already registered ? Log in</Text>
                </Pressable>
                <Pressable style={styles.loginBottomButton} onPress={goToHome}>
                    <Text style={styles.linkButton}>Continue as a guest</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    loginPage: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#302F37',
    },
    logoContainer: {
        width: '100%',
        height: '40%',
        marginBottom: 20,
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
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
        marginTop: 20,
    },
    loginBottomButton: {
        padding: 5,
    },
    linkButton: {
        color: "#C9FAE8",
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


export default RegisterPage;
