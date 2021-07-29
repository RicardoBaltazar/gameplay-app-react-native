import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';


const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
    return (
        <>
            <Navigator
                headerMode='none' //tirar o cabeçalho que o navigator cria
                screenOptions={{
                    cardStyle: {
                        backgroundColor: 'transparent' //para respeitar o background definido no app
                    }
                }}
            >
                <Screen 
                    name='Home'
                    component={Home}
                />
                <Screen 
                    name='SignIn'
                    component={SignIn}
                />
            </Navigator>
        </>
    )
}

export { AuthRoutes }