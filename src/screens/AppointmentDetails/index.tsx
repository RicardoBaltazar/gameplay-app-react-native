import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';

const AppointmentDetails = () => {
    const members = [
        {
            id: '1',
            name: 'Ricardo',
            avatar_url: 'https://github.com/RicardoBaltazar.png',
            status: 'online'
        },
        {
            id: '2',
            name: 'Ricardo',
            avatar_url: 'https://github.com/RicardoBaltazar.png',
            status: 'offline'
        }
    ]
    return (
        <>
            <Background>
                <Header
                    title='Detalhes'
                    action={
                        <BorderlessButton>
                            <Fontisto
                                name="share"
                                size={24}
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
                />

                <ImageBackground source={BannerImg} style={styles.banner}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>Lendário</Text>
                        <Text style={styles.subtitle}>É Hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                    </View>
                </ImageBackground>

                <ListHeader 
                title="Jogadores"
                subtitle="total 3"
                />

                <FlatList //para renderizar vários componentes
                data={members}
                keiExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
                />
            </Background>
        </>
    );
}

export { AppointmentDetails };