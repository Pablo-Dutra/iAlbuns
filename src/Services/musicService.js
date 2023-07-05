import { db } from "./Conn";

// CRIAR A TABELA DE MUSICAS CASO NÃO EXISTA
export function criaTabelaMusicas() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS Musics (id INTEGER PRIMARY KEY AUTOINCREMENT, idAlbum TEXT, name TEXT);");
    });
}

// ADICIONAR UMA MÚSICA
export async function adicionaMusica(musica) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Musics (name,idAlbum) VALUES (?,?);", [musica.name, musica.idAlbum], () => {
                resolve("Música adicionada com sucesso!");
            });
        });
    });
}

// ATUALIZAR UMA MÚSICA
export async function atualizaMusica(musica) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Musics SET name = ? WHERE id = ?;", [musica.name, musica.id], () => {
                resolve("Música atualizada com sucesso!");
            });
        });
    });
}

// EXCLUIR UMA MÚSICA
export async function removeMusica(musica) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Musics WHERE id = ?;", [musica.id], () => {
                resolve("Música removida com sucesso!");
            });
        });
    });
}

// LISTAR TODAS MÚSICAS
export async function listaMusicas(idAlbum) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Musics WHERE idAlbum = ?;", [idAlbum], (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}