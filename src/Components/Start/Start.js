import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import logo from '../../../assets/img/logo.png';

export default function TelaInicial() {
    const navigation = useNavigation();
    return (
      <View style={estilos.textoInstrucoes}>
        <View style={estilos.viewLogo}>
            <Text style={ estilos.textoInfo }> iTunes </Text>
            <Image source={ logo } style={ estilos.logo } />
        </View>
            <TouchableOpacity style={ estilos.botao } onPress={ () => { navigation.navigate('Albuns') } } >
                <Text style={ estilos.textoInfo }><MaterialIcons name="library-music" size={24} color="black" /> Albuns </Text>                  
            </TouchableOpacity>
            <TouchableOpacity style={ estilos.botao } onPress={ () => { navigation.navigate('About') } } >
                <Text style={ estilos.textoInfo }><MaterialIcons name="perm-device-info" size={24} color="black" /> Sobre </Text>          
            </TouchableOpacity>
      </View>
    );
  }

const larguraTela = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    botao: {
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        padding: 8,
        margin: 8,
        borderColor: "#FFFFFF",
        elevation: 10,
    },
    textoInfo: {
        fontSize: 25,
        lineHeight: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontStyle: 'italic',
    },
    textoInstrucoes: {
        fontSize: 25,
        lineHeight: 50,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    logo: {
        width: larguraTela/2,
        height: larguraTela/2,
    },  
    viewLogo:{
        alignItems: "center"
    }
});