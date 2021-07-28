// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StatusBar } from 'react-native';
//importando hook para carregamento das fontes. As fontes devem ser carregadas no arquivo principal app
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
//biblioteca de loading que segura a tela de splash
import AppLoading from 'expo-app-loading';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  //carregando as fontes e deixando a tela de splash enquanto as fontes não carregarem
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  if (!fonstLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SignIn />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
