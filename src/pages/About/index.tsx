import React from 'react';

import { Container, Title } from './styles';

import DrawerButton from '../../components/DrawerButton';

export default function About(){
    return (
        <Container>
            <DrawerButton />
            <Title>About</Title>
        </Container>
    )
}