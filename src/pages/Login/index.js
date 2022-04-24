import React, {useState, useEffect} from 'react';
import{View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from './firebaseConnection';

console.disableYellowBox=true;

export default function Login(){
   
     const navigation = useNavigation();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('') ; 
  

 
    async function logar(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (value) => {
        navigation.navigate('Home', {user: value.user.email})
        })
        .catch((error) => {
        
        alert('Algo deu errado!!');
            return;
        });

        setEmail('');
        setPassword('');

    }

     
    return(

        <View style={styles.container}>
            <Text style={styles.txtIp}>Email</Text>
            <TextInput
            style={styles.Input}
            underlineColorAndroid='transparent'
            onChangeText={(texto) => setEmail(texto)}
            value={email}
            />


            <Text style={styles.txtIp}>Password</Text>
            <TextInput
            style={styles.Input}
            underlineColorAndroid='transparent'
            onChangeText={(texto) => setPassword(texto)}
            secureTextEntry={true}
            value={password}
            />

            <TouchableOpacity
            onPress={logar}
            style={styles.btnArea}
            >
                <Text style={styles.txtBtn}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
            style={[styles.btnArea, {backgroundColor: '#00b38f'}]}
            >
                <Text style={styles.txtBtn}>Cadastrar</Text>
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
        txtIp:{
            fontSize: 18,
        },
        Input:{
            borderWidth: 1,
            marginBottom: 10,
            height: 40,
            padding: 10,
            fontSize: 18,
        },
        btnArea:{
            borderWidth: 0,
            height: 40,
            marginTop: 15,
            backgroundColor: '#339933',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txtBtn:{
            fontSize: 18,
            color: '#fff',
        }
    })