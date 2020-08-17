import React from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { ButtonContainer, ButtonIcon } from './styles';

interface Props {
    title?: string;
    handlePress?: () => void;
}

const DrawerButton: React.FC<Props> = (props) => {

    const navigation = useNavigation();

    return (
        <ButtonContainer onPress={()=> navigation.dispatch(DrawerActions.openDrawer())} >
            <ButtonIcon size={38} name="menu" />
        </ButtonContainer>
    )
}

export default DrawerButton;