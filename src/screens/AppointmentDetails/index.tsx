import React from 'react';
import { View } from 'react-native';

import { styles } from './styles'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

const AppointmentDetails = () => {
    return (
        <>
            <Background>
                <Header 
                    title='Detalhes'
                />
            </Background>
        </>
    );
}

export { AppointmentDetails };