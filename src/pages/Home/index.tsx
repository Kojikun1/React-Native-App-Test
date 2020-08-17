import React, { useState } from 'react';
import {Text, Button, Image } from 'react-native';

import { Container } from './styles';

import DrawerButton from '../../components/DrawerButton';
import { useAuth } from '../../contexts/authContext';

export default function Home(){
     const { user, signOut } = useAuth();

     function handleSignOut(){
         signOut();
     }

     console.log(user);
    return (
        <Container>
            <DrawerButton  />
            <Text>Home</Text>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
            <Button title="SignOut" onPress={handleSignOut}  />
        </Container>
    )
}

