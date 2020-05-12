"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router(); // A variavel router recebe a rota que está ativa no momento.
        this.config(); // Quando o construtor é executado, esta linha chama o método config
    }
    config() {
        // Ao acessar essa rota, esse método responde com um 'Hello'
        // req e res, será passada pelo Controller para ficar mais organizado.
        // this.router.get('/', (req, res) => res.send('Hello World - Games'));
        // Ao acessar essa rota, o método List da classe gamesController será executado.
        this.router.get('/', gamesController_1.default.List);
        // Ao acessar essa rota, o método GetOne da classe gamesController será executado.
        this.router.get('/:id', gamesController_1.default.GetOne);
        // Ao acessar essa rota, o método create da classe gamesController será executado.
        this.router.post('/', gamesController_1.default.create);
        // Ao acessar essa rota, o método update da classe gamesController será executado.
        this.router.put('/:id', gamesController_1.default.update);
        // Ao acessar essa rota, o método delete da classe gamesController será executado.
        this.router.delete('/:id', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes(); // Instanciando a classe 
exports.default = gamesRoutes.router; // Está exportando a variavel router declarada como publica.
