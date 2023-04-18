import React from 'react';
import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native';

const LoginPage = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });

    }

    const goToRegister = () => navigation.navigate('Register');

    const goToHome = () => {
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    return (
        <View style={styles.loginPage}>
            <Text style={styles.loginTitle}>Connexion</Text>
            <TextInput
                style={styles.loginInput}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.loginInput}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Mot de passe"
            />
            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text>Se connecter</Text>
            </Pressable>
            <View style={styles.loginBottomButton}>
                <Pressable onPress={goToRegister}>
                    <Text>Creer un compte</Text>
                </Pressable>
                <Pressable onPress={goToHome}>
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
    loginBottomButton: {
        alignItems: 'center',
    },
});


export default LoginPage;
