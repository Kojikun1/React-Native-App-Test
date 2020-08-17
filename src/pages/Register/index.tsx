import React from 'react';
import { Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import BackButton from '../../components/BackButton';

import { useAuth } from '../../contexts/authContext';

export default function Register(){


    const navigation = useNavigation();
    return (
        <Container>
            <BackButton />
            <Text>Register</Text>
            <Button title="Login" onPress={()=> navigation.goBack()} />
        </Container>
    )
}