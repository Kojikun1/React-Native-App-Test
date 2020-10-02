import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { 
    Container,
    LogoContainer,
    StyledInput,
    ButtonContainer,
    SubmitText,
    ErrorText
 } from './styles';
import BackButton from '../../components/BackButton';
import AnimatedInputContainer from '../../components/InputContainer';
import AnimatedImage from '../../components/AnimatedImage';

import { useAuth } from '../../contexts/authContext';

const FormSchema = yup.object({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});

export default function Register(){

    const { register } = useAuth();

    const navigation = useNavigation();

    function handleRegister(value: any){
         register(value.name,value.email,value.password);
         
         navigation.goBack();
    }
    return (
        <Container>
            <BackButton />
            <LogoContainer>
                 <AnimatedImage values={{inital: {x: 0.8, y: 0.8},final:{x: 0.4, y:0.4}}} />
            </LogoContainer>
            <Formik
           initialValues={{ name: "",email: "", password: ""}}
           validationSchema={FormSchema}
           onSubmit={(values) => {
               handleRegister(values);
           }}
        >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
            <AnimatedInputContainer >
                <StyledInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        placeholder="Name"
                />
                <ErrorText>{touched.name && errors.name}</ErrorText>
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
                        secureTextEntry={true}
                />
                <ErrorText>{touched.password && errors.password}</ErrorText>
                <ButtonContainer onPress={handleSubmit} >
                    <SubmitText>Registrar</SubmitText>
                </ButtonContainer>
            </AnimatedInputContainer>
            )}
        </Formik>
        </Container>
    )
}