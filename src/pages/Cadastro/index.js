import React, {useState} from 'react';
import{View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import firebase from '../Login/firebaseConnection';


import { useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    nome: yup.string().required("Informe seu nome"),
    email: yup.string().email('Email invalido').required('Informe seu email'),
    senha: yup.string().min(6, "A senha deve ter no minito 6 digito").required('Informe sua Senha'),

})

export default function Cadastro(){

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    //const navigation = useNavigation();
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [name, setName] = useState('');
    //const [telefone, setTelefone] = useState('');

    async function cadastrar(data){
    

         console.log(data);        
      
    };
    
    return(
        <View style={styles.container}>


            <Controller
            control={control}
            name="nome"
            render={({field: { onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Seu Nome'
            style={[styles.input, {
                borderWidth: errors.nome && 1,
                borderColor: errors.nome && 'red',
             }]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o text input é focado
            />
            )}
            />
            {errors.nome && <Text style={styles.errosInfo}>{errors.nome?.message}</Text>}

            <Controller
            control={control}
            name="email"
            render={({field: { onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Seu Email'
            style={[styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email&& 'red',
             }]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o text input é focado
            />
            )}
            />

            {errors.email && <Text style={styles.errosInfo}>{errors.email?.message}</Text>}
            
            
           
            <Controller
            control={control}
            name="senha"
            render={({field: { onChange, onBlur, value}}) => (
            <TextInput
            placeholder='Sua Senha'
            style={[styles.input, {
                borderWidth: errors.senha && 1,
                borderColor: errors.senha && 'red',
             }]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur} // chamado quando o text input é focado
            secureTextEntry={true}
            />
            )}
            />
            {errors.senha && <Text style={styles.errosInfo}>{errors.senha?.message}</Text>}
            

            
            <TouchableOpacity
            onPress={ handleSubmit(cadastrar)}
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
        marginTop: 1,
    
    },
    input:{
        height: 40,
        marginBottom: 3,
        padding: 10,
        fontSize: 18,
        margin: 10,
       
    },
    errosInfo:{
        color: 'red',
        alignSelf: 'flex-start',
        marginBottom: 3,
        marginTop: 3,
        margin: 10,
        
    },
    btnArea:{
        height: 40,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59b300',
        marginTop: 10,
        margin: 10,
    },
    btnTxt:{
        color: '#fff',
        fontSize: 18,
     }
})
