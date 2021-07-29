import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode //qualquer elemento filho do react
}

const Background = ({children}: Props) => {
    return (
        <>
            <LinearGradient 
                style={styles.container}
                colors={[
                    theme.colors.secondary80,
                    theme.colors.secondary100
                ]}
            >
                { children }    
            </ LinearGradient>
        </>
    );
}

export { Background };