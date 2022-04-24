import React, {useState} from 'react';
import{View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import firebase from '../Login/firebaseConnection';

export default function Cadastro(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((value) => {
        navigation.navigate('Login', {user: value.user.email});
        })
         .catch((error) => {
             alert('algo está errado!!')
             return;
         })

         setEmail('');
         setPassword('');
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.txtInfo}>Email</Text>
            <TextInput
            style={styles.input}
            value={email}
            onChangeText={(texto) => setEmail(texto) }
            />

            <Text style={styles.txtInfo}>Password</Text>
            <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(texto) => setPassword(texto) }
            />

            <TouchableOpacity
            onPress={cadastrar}
            style={styles.btnArea}    
            >
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        margin: 10,
    },
    txtInfo:{
        fontSize: 18,
    },
    input:{
        borderWidth: 1,
        height: 40,
        marginBottom: 20,
        padding: 10,
        fontSize: 18,
    },
    btnArea:{
        height: 40,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59b300'
    },
    btnTxt:{
        color: '#fff',
        fontSize: 18,
     }
})
