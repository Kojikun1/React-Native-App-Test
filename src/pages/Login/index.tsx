import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, LinkContainer, LinkText, StyledInput, InputContainer } from './styles';
import logo from '../../assets/company.png';
import { useAuth } from '../../contexts/authContext';

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigation();

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn(email,password);
    }
    return (
        <Container>
            <Image source={logo} />
            <InputContainer>
                <StyledInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
                <StyledInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                />
            </InputContainer>
            <LinkContainer onPress={handleSignIn} >
                 <LinkText>Login</LinkText>
            </LinkContainer>
            <LinkContainer onPress={()=> navigation.navigate('Register')} >
                 <LinkText>Register</LinkText>
            </LinkContainer>
        </Container>
    )
}

