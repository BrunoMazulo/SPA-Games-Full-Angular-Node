import { createPool } from 'promise-mysql';

export async function connect(){
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'ng_games_db',
        connectionLimit: 10
    });
    return connection;
}