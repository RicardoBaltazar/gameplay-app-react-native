import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

const SignIn = () => {
    return (
        <View style={styles.container}>

            <Image 
            source={IllustrationImg} 
            style={styles.image} 
            resizeMode="stretch" //para a imagens se ajustar au tamanho definido
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games
                    favoritos com seus amigos!
                </Text>

                <ButtonIcon 
                title="Entrar com Discord" // esta tipada dentro de Props então não da erro
                activeOpacity={0.7} // esta tipada dentro de Props e recuperada com '...rest' então não da erro
                />
            </View>
        </View>
    )
}

export { SignIn };