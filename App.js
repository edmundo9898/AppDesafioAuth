import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Login'
        component={Login}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        />
        
        <Stack.Screen 
        name='Cadastro'
        component={Cadastro}
        
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}