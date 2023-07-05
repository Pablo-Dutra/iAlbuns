import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenStart  from './src/Components/Start/Start'
import screenAlbuns from './src/Components/Album/Albuns'
import screenMusics from './src/Components/Music/Musics'
import screenAbout  from './src/Components/About/About'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start"   component={screenStart} />
        <Stack.Screen name="Albuns"  component={screenAlbuns} />
        <Stack.Screen name="Musicas" component={screenMusics} />
        <Stack.Screen name="About"   component={screenAbout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}