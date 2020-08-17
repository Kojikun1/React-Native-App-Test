import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AuthRoutes(){
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} >
            <AuthStack.Screen
               name="Login"
               component={Login}
            />
             <AuthStack.Screen
               name="Register"
               component={Register}
            />
        </AuthStack.Navigator>
    )
}