import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import logo from '../../../assets/img/logo.png';

// TELA DO INFORMAÇÕES DO DESENVOLVEDOR
export default function About() {

    return <View>
        <View style={estilos.viewLogo}>
            <Text style={ estilos.textoInfo }> iTunes </Text>
            <Image source={ logo } style={ estilos.logo } />
        </View>
        <Text style={ estilos.textoInfo }> Desenvolvido por Pablo Dutra </Text>      
        <Text style={ estilos.textoInfo }> e-mail: pablo.dutra@gmail.com </Text>    
        <Text style={ estilos.textoInfo }> Pós Graduação </Text>    
        <Text style={ estilos.textoInfo }> Devenvolvimento de Sistemas Web</Text>    
    </View>
}
const larguraTela = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  textoInfo: {
      fontSize: 20,
      lineHeight: 50,
      textAlign: 'center',
      textAlignVertical: 'center',
  },
  logo: {
    width: larguraTela/2,
    height: larguraTela/2,
},  
viewLogo:{
    alignItems: "center"
}
});