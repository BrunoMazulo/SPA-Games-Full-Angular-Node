import { faGamepad, faPlusCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faGamepad = faGamepad;
  faPlusCircle = faPlusCircle;
  faHome = faHome;
  
  constructor() { }

  ngOnInit(): void {
  }

}
