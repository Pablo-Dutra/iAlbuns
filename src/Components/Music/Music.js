import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export function Music({item, setMusicaSelecionada}) {

  return (<View style={estilos.cartao}>
      <TouchableOpacity style={estilos.cardInformacoes} >
        <View style={estilos.cardTextos}>
          <Text style={estilos.name}><MaterialIcons name="music-note" size={20} color="gray" /> {item.name}</Text>
        </View> 
      </TouchableOpacity>      
      <TouchableOpacity style={estilos.btnFuncoes} onPress={() => setMusicaSelecionada(item)}>
        <MaterialIcons name="settings" size={20} color="grey" />
      </TouchableOpacity>
  </View>
  )
}

const estilos = StyleSheet.create({
  cartao: {
    width: "90%",
    height: 40,
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
  cardInformacoes: {
    width: "90%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: "row"
  }, 
  cardTextos: {
    width: "90%",
    justifyContent: "center",
    marginLeft: 3,    
  }, 
  btnFuncoes: {
    width: "10%",
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center"
},  
})
