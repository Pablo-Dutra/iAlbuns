import React, { useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { adicionaAlbum, atualizaAlbum, removeAlbum } from "../../Services/albumService";
import { MaterialIcons } from '@expo/vector-icons';

export default function AlbumEditor({mostraAlbuns, albumSelecionado, setAlbumSelecionado}) {

  useEffect(() => {
    if(albumSelecionado.id) {
      preencherModal();
      setModalVisivel(true);
      setAlbumParaAtualizar(true);
      return;
    }
    setAlbumParaAtualizar(false);
    mostraAlbuns();
  }, [albumSelecionado]);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);
  const [albumParaAtualizar, setAlbumParaAtualizar] = useState(false);

  async function salvaAlbum() {
    const umAlbum = {
      name: name,
      year: year,
      cover: cover
    }
    await adicionaAlbum(umAlbum);
    mostraAlbuns();
    limpaModal();
  }

  async function editaAlbum() {
    const umAlbum = {
      name: name,
      year: year,
      cover: cover,
      id: albumSelecionado.id
      }
      await atualizaAlbum(umAlbum);
      mostraAlbuns();
      limpaModal();
  }

  async function deletaAlbum() {
    await removeAlbum(albumSelecionado);
    mostraAlbuns();
    limpaModal();
  }

  function preencherModal() {
    setName(albumSelecionado.name);
    setYear(albumSelecionado.year);
    setCover(albumSelecionado.cover);
  }

  function limpaModal() {
    setName("");
    setYear("");
    setCover("");
    setAlbumSelecionado({});
    setModalVisivel(false);
  }

  return(
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {setModalVisivel(false)}}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Dados do Album</Text>
              <Text style={estilos.modalSubTitulo}>Nome</Text>
              <TextInput 
                style={estilos.modalInput}
                onChangeText={novoNome => setName(novoNome)}
                placeholder="Digite o nome"
                value={name}/>
              <Text style={estilos.modalSubTitulo}>Capa do disco</Text>
              <TextInput 
                style={estilos.modalInput}
                onChangeText={novaCapa => setCover(novaCapa)}
                placeholder="Digite o link da capa"
                value={cover}/>              
              <Text style={estilos.modalSubTitulo}>Ano</Text>
              <TextInput 
                style={estilos.modalInput}
                keyboardType="numeric"
                onChangeText={novoAno => setYear(novoAno)}
                placeholder="Digite o ano do disco"
                value={year}/>

              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => {albumParaAtualizar ? editaAlbum() : salvaAlbum()}}>
                  <Text style={estilos.modalBotaoTexto}><MaterialIcons name="save" size={50} color="white" /></Text>
                </TouchableOpacity>

                {albumParaAtualizar ?
                  <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => {deletaAlbum()}}>
                    <Text style={estilos.modalBotaoTexto}><MaterialIcons name="delete-forever" size={50} color="white" /></Text>
                  </TouchableOpacity> : <></>
                }                

                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => {limpaModal()}}>
                  <Text style={estilos.modalBotaoTexto}><MaterialIcons name="arrow-back" size={50} color="white" /></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => {setModalVisivel(true)}} style={estilos.adicionarAlbum}>
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 10,
  },
  modalTitulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 24,
    marginBottom: 12,
    padding: 4,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000000",
    borderRadius: 4,
  },
  modalSubTitulo: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#5cb85c",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  modalBotaoDeletar: {
    backgroundColor: "#d9534f",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  modalBotaoCancelar: {
    backgroundColor: "#0275d8",
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    height: 64,
    width: 64,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  adicionarAlbum: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 16,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  refresh: {
    backgroundColor: "#0275d8",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
});
