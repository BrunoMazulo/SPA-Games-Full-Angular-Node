import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/games';
import { GamesService } from '../../services/games.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  // Para usar esse objeto, importar no app module o FormsModule
  // No Html usar o ngModel
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(
    private gamesService: GamesService, 
    private router: Router,
    private activedRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    const paramsrout = this.activedRoute.snapshot.params; // Pega a rota que está ativa
    // console.log(paramsrout);
    if (paramsrout.id){ // Se existir um id na rota
      this.gamesService.getGame(paramsrout.id) // Chama o serviço getGame, que busca o jogo no servidor
      .subscribe(
        res => {
          console.log(res);
          this.game = res; // Atribui a resposta do servidor a game
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewGame(){
    // console.log(this.game); // Para debugar no browser
    delete this.game.created_at; // Elimina esses campos, porque para gravar no database isso é preenchido pelo backend.
    delete this.game.id;

    this.gamesService.saveGame(this.game)
    .subscribe(
      res => {
        console.log(res);
        this.showSuccess();
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }

  updateGame(){
    //console.log(this.game);
    delete this.game.created_at; // Não envia devido a data de criação ser a mesma

    this.gamesService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.showSuccess();
          this.router.navigate(['/games']); // Redireciona para rota /games
        },
        err => console.error(err)
      )
    }

    showSuccess() {
      this.toastr.success('Confirmando');
    }

}
