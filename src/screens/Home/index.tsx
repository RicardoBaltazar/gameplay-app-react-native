import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

const Home = () => {
    return (
        <>
            <View>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd />
                </View>
            </View>
        </>
    );
}

export { Home };