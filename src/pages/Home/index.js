import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import firebase from '../Login/firebaseConnection';



export default function Home( { route }){

    const navigation = useNavigation();
   
  
  
    async function logout(){
       await firebase.auth().signOut();
       
       alert('Deslogado com sucesso!!');
      
       navigation.navigate('Login');
       
    }
    
    
    return(

        <View style={styles.container}>
           
            <Text style={styles.txtLo}>Seja Bem vindo: {route.params?.user}</Text>
            
            <TouchableOpacity
            style={styles.btnArea}
            onPress={logout}
            >
                <Text style={styles.txtBtn}>Deslogar</Text>
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
  txtLo:{
      fontSize: 18,
  },
  btnArea:{
      borderWidth: 0,
      height: 40,
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 20,
      backgroundColor: '#339933'
  },
  txtBtn:{
      fontSize: 18,
      color: '#fff',
  }
})