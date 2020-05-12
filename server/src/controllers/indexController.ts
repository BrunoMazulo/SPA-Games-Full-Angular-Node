import { Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        // res.send('Rota index acessada') // Apenas responde um texto
        res.json({text: 'API is running'}); // Responde com um Json simples
    }
}

// Essa linha indica que está exportando toda a classe IndexController na constante indexController
export const indexController = new IndexController(); 