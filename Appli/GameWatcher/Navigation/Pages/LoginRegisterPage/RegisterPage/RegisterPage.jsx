import React from 'react';
import {StyleSheet, SafeAreaView, Text, TextInput, View, Pressable} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";

const RegisterPage = () => {
    const [username, onChangeUsername] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');
    return (
        <View style={styles.loginPage}>
            <Text style={styles.loginTitle}>Inscription</Text>
            <TextInput
                style={styles.loginInput}
                onChangeText={onChangeUsername}
                value={username}
                placeholder="Nom d'utilisateur"
            />
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
            <TextInput
                style={styles.loginInput}
                onChangeText={onChangeConfirmPassword}
                value={confirmPassword}
                placeholder="Confirmer le mot de passe"
            />
            <Pressable style={styles.loginButton}>
                <Text>Se connecter</Text>
            </Pressable>
            <View style={styles.loginBottomButton}>
                <Pressable>
                    <Text>Creer un compte</Text>
                </Pressable>
                <Pressable>
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


export default RegisterPage;