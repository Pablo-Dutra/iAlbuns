import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export function Album({item, setAlbumSelecionado}) {
  const navigation = useNavigation();
  const id = item.id;
  return (<View style={estilos.cartao}>
      <TouchableOpacity style={estilos.cardInformacoes} onPress={ () => { navigation.navigate('Musicas', { id }) } } >
        <View style={estilos.img}>
          <Image source={{uri: item.cover}} style={estilos.imagem} />
        </View>    
        <View style={estilos.cardTextos}>
          <Text style={estilos.name}>{item.name}</Text>
          <Text style={estilos.year}>{item.year}</Text>
        </View> 
      </TouchableOpacity>      
      <TouchableOpacity style={estilos.btnFuncoes} onPress={() => setAlbumSelecionado(item)}>
        <MaterialIcons name="settings" size={40} color="grey" />
      </TouchableOpacity>
  </View>
  )
}
const larguraTela = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
  cartao: {
    width: "90%",
    height: 80,
    backgroundColor: "#E0E0E0",
    marginLeft: "5%",
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    elevation: 10,  
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    lineHeight: 28,
  },
  cover: {
    fontSize: 14,
    lineHeight: 28,
  },
  img: {
    width: "30%"
  },
  imagem: {
    width: larguraTela/4,
    height: larguraTela/4,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  cardInformacoes: {
    width: "80%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: "row"
  }, 
  cardTextos: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  }, 
  btnFuncoes: {
    width: "20%",
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center"
},  
})
