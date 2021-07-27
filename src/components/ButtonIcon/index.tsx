import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity, //elemento de clique
    TouchableOpacityProps,
} from 'react-native';
import DiscordImg from '../../assets/discord.png'

import { styles } from './styles';

type Props = TouchableOpacityProps & { //significa Props recebe tudo que tem tentro de Touch e mais o que esta dentro das chaves {}
    title: String
}

const ButtonIcon = ({title, ...rest} : Props) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

export { ButtonIcon };