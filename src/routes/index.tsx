import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth }from '../contexts/authContext';

export default function Routes() {
    const { signed, isLoading } = useAuth();

    console.log(signed);

    if(isLoading){
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                 <ActivityIndicator size={40} color="green" />
            </View>
        )
    }
    return (
       signed ? <AppRoutes /> : <AuthRoutes />
    )
}