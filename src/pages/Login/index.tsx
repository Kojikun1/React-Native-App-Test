import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { 
    Container,
    LogoContainer,
    ButtonContainer,
    LinkContainer, 
    LinkText, 
    StyledInput,
    ErrorText,
   } from './styles';

import AnimatedInputContainer from '../../components/InputContainer';
import AnimatedImage from '../../components/AnimatedImage';

import { useAuth } from '../../contexts/authContext';

const FormSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});


export default function Login(){

    const navigation = useNavigation();

    const { signIn } = useAuth();

    function handleSignIn(values: any){
        const { email, password} = values;
        signIn(email,password);
    }
    return (
        <Container>
            <LogoContainer>
                <AnimatedImage values={{inital: {x: 1, y: 1},final:{x: 0.5, y:0.5}}} />
            </LogoContainer>
            <Formik
           initialValues={{ email: "", password: ""}}
           validationSchema={FormSchema}
           onSubmit={(values) => {
               handleSignIn(values);
           }}
        >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
            <AnimatedInputContainer >
                <StyledInput
                        onChangeText={handleChange('email')}
                        value={values.email}
                        placeholder="Email"
                />
                <ErrorText>{touched.email && errors.email}</ErrorText>
                <StyledInput
                        onChangeText={handleChange('password')}
                        value={values.password}
                        placeholder="password"
                />
                <ErrorText>{touched.password && errors.password}</ErrorText>
                <ButtonContainer onPress={handleSubmit} >
                    <LinkText>Acessar</LinkText>
                </ButtonContainer>
                <LinkContainer onPress={()=> navigation.navigate('Register')} >
                    <LinkText>Criar conta</LinkText>
                </LinkContainer>
            </AnimatedInputContainer>
            )}
        </Formik>
        </Container>
    )
}

