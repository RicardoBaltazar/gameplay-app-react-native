import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler'; //indicado para botões sem texto e sem background
import { Feather } from '@expo/vector-icons';
import { Text , View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    title: String;
    action?: ReactNode; //tipando como um nó do react
}

const Header = ({ title, action }: Props) => {
    //deseestruturando
    const { secondary100, secondary40, heading } = theme.colors
    const navigation = useNavigation();

    function handleGoBack(){
        //função goBack() para voltar para a tela anterior
        navigation.goBack();
    }

    return (
        <>
            <LinearGradient 
                style={styles.container}
                colors={[secondary100, secondary40]}
            >

                <BorderlessButton onPress={handleGoBack}>
                    <Feather 
                        name="arrow-left"
                        size={24}
                        color={heading}
                    />
                </BorderlessButton>

                <Text style={styles.title}>
                    { title }
                </Text>

                {
                    action &&
                    <View>
                        { action }
                    </View>
                }
            
            </LinearGradient>
        </>
    );
}

export { Header } ;