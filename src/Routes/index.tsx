//Arquivo para centralizar as rotas
import React from 'react'
//componente que cuida as rotas acessadas dando acesso a rollbabks e etc...
import { NavigationContainer } from '@react-navigation/native' 

import { AuthRoutes } from './auth.routes'

const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </>
    )
}

export { Routes };