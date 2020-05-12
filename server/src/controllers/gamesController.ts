import { Game } from '../interface/games'
import { Request, Response} from 'express';
// Está importando a classe connect que está sendo exportada do arquivo database.ts
import {connect} from '../database';


class GamesController {

    public async List (req: Request, res: Response){
        const conn = await connect();
        const games = await conn.query('SELECT * FROM games');
        res.json(games);
        //const games = await pool.query('SELECT * FROM games'); // Executa está query e armazena na constante
        //res.json(games);
    }

    public async GetOne(req: Request, res: Response){
        const id = req.params.id;
        const conn = await connect();
        const games = await conn.query('SELECT * FROM games WHERE id = ?', [id]);
        return res.json(games[0]);
        // res.json({text: 'Este é o jogo' + req.params.id});
    }

    public async create (req: Request, res: Response){
        // await porque consulta no banco é assincrona.
        const newGame: Game = req.body; // Para tipar os dados da Requisição. Game está na interface
        const conn = await connect();
        await conn.query('INSERT INTO games set?', newGame);
        res.json({text: 'Jogo criado'});
    }

    public async update (req: Request, res: Response){
        const id = req.params.id;
        const updateGame: Game = req.body;
        const conn = await connect();
        await conn.query('UPDATE games SET ? WHERE id = ?', [updateGame, id]);
        res.json({text: 'Game ID: ' + req.params.id + ' Atualizado'});
    }

    public async delete (req: Request, res: Response){
        const id: string = req.params.id;
        const conn = await connect();
        const games = await conn.query('DELETE FROM games WHERE id = ?', [id]);
        return  res.json({text: 'Jogo de ID: ' + req.params.id + ' Deletado com sucesso'});
       
    }
}

// Essa linha indica que está exportando toda a classe gamesController na constante gamesController
const gamesController = new GamesController(); // instanciando a classe

export default gamesController; // exportando a classe