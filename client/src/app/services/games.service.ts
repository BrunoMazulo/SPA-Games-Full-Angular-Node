import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../models/games'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getGames(){
    return this.httpClient.get(`${this.API_URI}/games`);
  }

  getGame(id: string){
    return this.httpClient.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string){
    return this.httpClient.delete(`${this.API_URI}/games/${id}`);
  }
  saveGame(game: Game){
    return this.httpClient.post(`${this.API_URI}/games/`, game);
  }

  updateGame(id: string|number, updateGame: Game): Observable<Game>{
    return this.httpClient.put(`${this.API_URI}/games/${id}`, updateGame);
  }
}

