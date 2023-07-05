import { db } from "./Conn";

// CRIAR A TABELA DE ALBUNS CASO NÃO EXISTA
export function criaTabelaAlbuns() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS Albuns (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, year TEXT, cover TEXT);");
    });
}


// ADICIONAR UM ALBUM
export async function adicionaAlbum(album) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Albuns (name, year, cover) VALUES (?, ?, ?);", [album.name, album.year, album.cover], () => {
                resolve("Album adicionado com sucesso!");
            });
        });
    });
}

// ATUALIZAR UM ALBUM
export async function atualizaAlbum(album) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Albuns SET name = ?, year = ?, cover = ? WHERE id = ?;", [album.name, album.year, album.cover, album.id], () => {
                resolve("Album atualizado com sucesso!");
            });
        });
    });
}

// EXCLUIR UM ALBUM
export async function removeAlbum(album) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Albuns WHERE id = ?;", [album.id], () => {
                resolve("Album removido com sucesso!");
            });
        });
    });
}
// BUSCAR UM ALBUM
export async function buscaAlbum(id) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Albuns WHERE id = ?;", [id], (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}

// LISTAR TODOS ALBUNS
export async function listaAlbuns() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Albuns;", [], (transaction, resultado) => {
                resolve(resultado.rows._array);
            });
        });
    });
}
