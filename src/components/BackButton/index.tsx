import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer, ButtonIcon } from './styles';

interface Props {
    title?: string;
    handlePress?: () => void;
}

const BackButton: React.FC<Props> = (props) => {

    const navigation = useNavigation();

    return (
        <ButtonContainer onPress={()=> navigation.goBack()} >
            <ButtonIcon size={38} name="arrow-back" />
        </ButtonContainer>
    )
}

export default BackButton;