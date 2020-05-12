"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Está importando a classe connect que está sendo exportada do arquivo database.ts
const database_1 = require("../database");
class GamesController {
    List(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const games = yield conn.query('SELECT * FROM games');
            res.json(games);
            //const games = await pool.query('SELECT * FROM games'); // Executa está query e armazena na constante
            //res.json(games);
        });
    }
    GetOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const conn = yield database_1.connect();
            const games = yield conn.query('SELECT * FROM games WHERE id = ?', [id]);
            return res.json(games[0]);
            // res.json({text: 'Este é o jogo' + req.params.id});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await porque consulta no banco é assincrona.
            const newGame = req.body; // Para tipar os dados da Requisição. Game está na interface
            const conn = yield database_1.connect();
            yield conn.query('INSERT INTO games set?', newGame);
            res.json({ text: 'Jogo criado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updateGame = req.body;
            const conn = yield database_1.connect();
            yield conn.query('UPDATE games SET ? WHERE id = ?', [updateGame, id]);
            res.json({ text: 'Game ID: ' + req.params.id + ' Atualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const conn = yield database_1.connect();
            const games = yield conn.query('DELETE FROM games WHERE id = ?', [id]);
            return res.json({ text: 'Jogo de ID: ' + req.params.id + ' Deletado com sucesso' });
        });
    }
}
// Essa linha indica que está exportando toda a classe gamesController na constante gamesController
const gamesController = new GamesController(); // instanciando a classe
exports.default = gamesController; // exportando a classe
