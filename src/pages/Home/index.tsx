import React from 'react';

import { Container, Title, LoggedUser, UserData } from './styles';

import DrawerButton from '../../components/DrawerButton';
import { useAuth } from '../../contexts/authContext';

export default function Home(){
     const { user } = useAuth();

     console.log(user);
    return (
        <Container>
            <DrawerButton  />
            <Title>Home</Title>
            <LoggedUser>Usuario: {user?.name}</LoggedUser>
            <UserData>Id: {user?._id}</UserData>
            <UserData>Email: {user?.email}</UserData>
        </Container>
    )
}

