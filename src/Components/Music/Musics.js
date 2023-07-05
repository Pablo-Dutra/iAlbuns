import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';

import MusicEditor from "./MusicEditor";
import { Music } from "./Music";
import { listaMusicas, criaTabelaMusicas } from "../../Services/musicService";
import { buscaAlbum } from "../../Services/albumService";
import { MaterialIcons } from '@expo/vector-icons';

export default function Musics() {
  const route = useRoute();
  const idAlbum = route.params?.id;
  const [info, setInfo] = useState(true);

  useEffect(() => {
    criaTabelaMusicas();
    listaMusicas();
    qualAlbum(idAlbum);
  }, []);

  const [musicaSelecionada, setMusicaSelecionada] = useState({});
  const [musicas, setMusicas] = useState([]);
  const [album, setAlbum] = useState([]);

  async function mostraMusicas() {
    const todasMusicas = await listaMusicas(idAlbum);
    setMusicas(todasMusicas)
  }
  async function qualAlbum(id) {
    const albumEscolhido = await buscaAlbum(id);
    setAlbum(albumEscolhido[0]);
  }

  function ocultarInfo(){
    setInfo(false);
  }  

  return (<SafeAreaView style={estilos.container}>
      <View style={estilos.cardTextos}>
        <Text style={estilos.name}>{album.name} </Text>
        <Image source={{uri: album.cover}} style={estilos.imagem} />
        <Text style={estilos.year}>{album.year} </Text>
      </View>          
      <FlatList
        data={musicas}
        renderItem={(musica) => <Music {...musica} setMusicaSelecionada={setMusicaSelecionada}/>}
        keyExtractor={musica => musica.id} />
        {info && (
        <TouchableOpacity style={estilos.cardInformacoes} onPress={ () => { ocultarInfo() } } >
        <View style={estilos.cardInstrucoes}>
          <Text style={estilos.tituloInstrucoes}>
            Instruções
          </Text>
          <Text style={estilos.instrucoes}>
            Clique em <MaterialIcons name="add" size={20} color="black" /> para adicionar uma nova música. 
            Clique em <MaterialIcons name="settings" size={20} color="black" /> para editar uma música criada.
            Clique neste card para ocultá-lo.
          </Text>  
        </View>
        </TouchableOpacity>
        )}        
      <MusicEditor 
        mostraMusicas={mostraMusicas} 
        musicaSelecionada={musicaSelecionada}
        setMusicaSelecionada={setMusicaSelecionada}
        albumSelecionado={idAlbum}/>
      <StatusBar/>
    </SafeAreaView>
  )
}
const larguraTela = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
	container: {
	    flex: 1,
	    alignItems: "stretch",
	    justifyContent: "flex-start",
      backgroundColor: "#EFEFEF",
	},
    name: {
        fontSize: 35,
        fontWeight: "700",
        marginBottom: 4,
    },
    year: {
        fontSize: 20,
        lineHeight: 28,
        marginBottom: 4,
    },
    cardTextos: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }, 
    imagem: {
        width: larguraTela/2,
        height: larguraTela/2,
        borderRadius: 10,
    },
    cardInformacoes: {
      width: "90%",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      flexDirection: "row"
    },  
    cardInstrucoes: {
      width: "100%",
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