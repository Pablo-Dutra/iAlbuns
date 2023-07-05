import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import AlbumEditor from "./AlbumEditor";
import { Album } from "./Album";
import { listaAlbuns, criaTabelaAlbuns } from "../../Services/albumService";
import { MaterialIcons } from '@expo/vector-icons';

export default function Albuns() {

  useEffect(() => {
    criaTabelaAlbuns();
    listaAlbuns();
  }, []);

  const [albumSelecionado, setAlbumSelecionado] = useState({});
  const [albuns, setAlbuns] = useState([]);
  const [info, setInfo] = useState(true);

  async function mostraAlbuns() {
    const todosAlbuns = await listaAlbuns();
    setAlbuns(todosAlbuns)
  }

  function ocultarInfo(){
    setInfo(false);
  }

  return (<SafeAreaView style={estilos.container}>
      <FlatList
        data={albuns}
        renderItem={(album) => <Album {...album} setAlbumSelecionado={setAlbumSelecionado}/>}
        keyExtractor={album => album.id} />
        {info && (
        <TouchableOpacity style={estilos.cardInformacoes} onPress={ () => { ocultarInfo() } } >
        <View style={estilos.cardInstrucoes}>
          <Text style={estilos.tituloInstrucoes}>
            Instruções
          </Text>
          <Text style={estilos.instrucoes}>
            Clique em <MaterialIcons name="add" size={20} color="black" /> para adicionar um novo album. 
            Clique em <MaterialIcons name="settings" size={20} color="black" /> para editar um album criado.
            Clique neste card para ocultá-lo.
          </Text>  
        </View>
        </TouchableOpacity>
        )}
      <AlbumEditor 
        mostraAlbuns={mostraAlbuns} 
        albumSelecionado={albumSelecionado}
        setAlbumSelecionado={setAlbumSelecionado}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
    backgroundColor: "#EFEFEF"
	}, 
  cardInstrucoes: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    backgroundColor: "#FFFFE0",
    marginLeft: "5%",
    borderRadius: 8,
    elevation: 10,      
  },
	instrucoes: {
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10
	}, 
	tituloInstrucoes: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10
	}, 
})