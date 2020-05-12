import {Router} from 'express';
import gamesController from '../controllers/gamesController';

class GamesRoutes{

    public router: Router = Router(); // A variavel router recebe a rota que está ativa no momento.

    constructor(){ // Ao instanciar a classe o construtor é executado.
        this.config(); // Quando o construtor é executado, esta linha chama o método config
    }

    config(): void{
        // Ao acessar essa rota, esse método responde com um 'Hello'
        // req e res, será passada pelo Controller para ficar mais organizado.
        // this.router.get('/', (req, res) => res.send('Hello World - Games'));

        // Ao acessar essa rota, o método List da classe gamesController será executado.
        this.router.get('/', gamesController.List);
        // Ao acessar essa rota, o método GetOne da classe gamesController será executado.
        this.router.get('/:id', gamesController.GetOne);
        // Ao acessar essa rota, o método create da classe gamesController será executado.
        this.router.post('/', gamesController.create);
        // Ao acessar essa rota, o método update da classe gamesController será executado.
        this.router.put('/:id', gamesController.update);
        // Ao acessar essa rota, o método delete da classe gamesController será executado.
        this.router.delete('/:id', gamesController.delete);
    }
}

const gamesRoutes = new GamesRoutes(); // Instanciando a classe 
export default gamesRoutes.router; // Está exportando a variavel router declarada como publica.