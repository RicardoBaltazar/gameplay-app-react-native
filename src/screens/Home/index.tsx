import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

const Home = () => {
    const [category, setCategory] = useState('')
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendario',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06/ ás 20:40h',
            description: 'É hoje que vamos chegar ao Challenger sem perder uma partida de md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendario',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06/ ás 20:40h',
            description: 'É hoje que vamos chegar ao Challenger sem perder uma partida de md10'
        }
    ]

    function handleCategorySelected(categoryId: String) {
        categoryId === category ? setCategory('') : setCategory(categoryId) //se o ID estiver marcado, será desmarcado
    }

    function handleAppointmentDetailes(){
        navigation.navigate('AppointmentDetails')
    }

    return (
        <>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelected}
                />


                <View style={styles.content}>
                    <ListHeader
                        title='Partidas Agendadas'
                        subtitle='Total 6'
                    />

                    <FlatList
                        //A scrollViw é recomendada quando há poucos elementos para serem listados, pois coloca todos em tela de uma vez
                        //A flat list é recomendada quando há muitos elementos a serem listados, pois renderiza aos poucos e é mais performatica
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                                data={item} 
                                onPress={handleAppointmentDetailes}
                            />
                        )}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        //no FlatList podemos passar uma componente em uma propriedade que já existe de divisor de lista
                        ItemSeparatorComponent={() => <ListDivider />}
                    />
                </View>
            </View>
        </>
    );
}

export { Home };