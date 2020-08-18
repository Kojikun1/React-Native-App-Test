import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
     flex: 1;
     align-items: center;
     justify-content: center;
     background-color: #191919;
`
export const LogoContainer = styled.View`
   flex: 1;
   justify-content: center;
`
export const StyledInput = styled.TextInput`
   width: 90%;
   color: #222;
   font-size: 16px;
   border-radius: 8px;
   background-color: #fff;
   padding: 10px;
`
export const ButtonContainer = styled.TouchableOpacity`
     background-color: #35AAFF;
     width: 90%;
     height: 45px;
     align-items: center;
     justify-content: center;
     border-radius: 8px;
`
export const submitText = styled.Text`
     color: #fff;
     font-size: 18px;
`
export const LinkContainer = styled.TouchableOpacity`
   margin-top: 15px;
`
export const LinkText = styled.Text`
    color: #fff;
    font-size: 18px;
`
export const ErrorText = styled.Text`
     color: #fff;
     margin-bottom: 5px;
`

