import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';
import {faGamepad, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Para deixar lado a lado os jogos no Html
  
  faGamepad = faGamepad;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  games: any = [];

  constructor(private gamesService: GamesService, private toastr: ToastrService) { }

  ngOnInit(): void{
    this.getGames();
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err));
  }

  deleteGame(id: string){
    // console.log(id);
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.showDelete();
        this.getGames();
      },
      err => console.error(err)
    )
  }

  showDelete() {
    this.toastr.error('Deletando','',{
        timeOut: 500,
        progressBar: true,
        progressAnimation: 'decreasing'
    });
  }

}
