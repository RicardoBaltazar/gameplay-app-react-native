import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { Avatar } from '../Avatar';

const Profile = () => {
    return (
        <>
            <View style={styles.container}>

                <Avatar 
                    urlImage={"https://github.com/RicardoBaltazar.png"}
                />

                <View>
                    <View style={styles.user}>
                        <Text style={styles.greeting}>
                            Ola,
                        </Text>

                        <Text style={styles.username}>
                            Ricardo
                        </Text>
                    </View>

                    <Text style={styles.message}>
                        Hoje é dia de Vitória
                    </Text>
                </View>

            </View>
        </>
    );
}

export { Profile };