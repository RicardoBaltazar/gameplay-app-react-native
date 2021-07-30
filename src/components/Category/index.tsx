import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = RectButtonProps & {
    title: String
    // icon: React.FC<SvgProps>
    checked?: Boolean
}

const Category = ({
    title,
    //icon: Icon, //passando para maiúsula para poder usar como componente. é do tidpo React.FC
    checked = false, // é opcional então pode ser true ou false caso queira
    ...rest
}: Props) => {
    return (
        <>
            <RectButton {...rest}>
                <LinearGradient
                    style={styles.container}
                    colors={[theme.colors.secondary50, theme.colors.secondary70]}>

                    <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                        <View style={checked ? styles.checked : styles.check} />

                        <Ionicons name="game-controller" size={48} color='#ffffff' />

{/* 
                        <Icon
                                width={48}
                                height={48}
                            /> */}

                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>

                </ LinearGradient>

            </RectButton>
        </>
    )
}

export { Category };