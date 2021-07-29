import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'; //botão melhor para Nativo IOS
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps; //tipagem apenas com RectButtonProps

const ButtonAdd =({...rest}: Props) => {
    return (
        <>
            <RectButton style={styles.container} {...rest}>
                <MaterialCommunityIcons 
                    name='plus'
                    color={theme.colors.heading}
                    size={24}
                />
            </RectButton>
        </>
    )
}

export { ButtonAdd }