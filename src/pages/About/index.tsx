import React from 'react';
import { View, TextInput, Text} from 'react-native';

import { Container } from './styles';

import DrawerButton from '../../components/DrawerButton';

export default function About(){
    return (
        <Container>
            <DrawerButton />
            <Text>About</Text>
        </Container>
    )
}