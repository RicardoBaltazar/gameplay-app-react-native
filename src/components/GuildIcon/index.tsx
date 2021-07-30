import React, { useState } from 'react';
import { Image } from 'react-native';
import { styles } from './styles';


type Props = {

}

const GuildIcon = ({ }: Props) => {

    const uri = ''

    return (
        <>
            <Image 
            style={styles.image}
            source={{ uri }}
            resizeMode="cover" //para a imagem se ajustar quando não tiver uma proporção boa

            />
        </>
    );
}

export { GuildIcon };