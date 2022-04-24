import React from 'react';
import{View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import firebase from '../Login/firebaseConnection';

export default function Cadastro(){

    return(

        <View style={styles.container}>
            <Text></Text>
            <TextInput />
            <TextInput />
            <TouchableOpacity>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{

    }
})