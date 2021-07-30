import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
// import Player from '../../assets/player.svg'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: String
    name: String
    icon: null,
    owner: Boolean
}

export type AppointmentProps = {
    id: String
    guild: GuildProps
    category: String
    date: String
    description: String
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

const Appointment = ({ data, ...rest }: Props) => {

    const [category] = categories.filter(item => item.id === data.category)

    const { owner } = data.guild

    return (
        <>
            <RectButton {...rest}>
                <View style={styles.container}>
                    <GuildIcon />

                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.title}>
                                {data.guild.name}
                            </Text>

                            <Text style={styles.category}>
                                {category.title}
                            </Text>
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.dateInfo}>
                                <AntDesign name="calendar" size={24} color="#ffffff" />
                                <Text style={styles.date}>
                                    {data.date}
                                </Text>
                            </View>

                            <View style={styles.playersInfo}>
                                {/* <Ionicons 
                                //mudar o preenchimento com condicional
                                //para manipular o fill no react native, não pode ter fill já no arquivo do svg nos assets
                                color={owner ? theme.colors.primary : theme.colors.on}
                            /> */}

                                <Text style={
                                    [
                                        styles.player, { color: owner ? theme.colors.primary : theme.colors.on }
                                    ]
                                }>
                                    {owner ? 'Anfitrião' : 'Visitante'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </RectButton>
        </>
    );
}

export { Appointment };