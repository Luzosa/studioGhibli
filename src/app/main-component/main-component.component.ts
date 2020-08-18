import { Component, OnInit } from '@angular/core';


//custom
import { StudioGhibliService } from './studio-ghibli.service';
import { Film } from './film';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  films: Array<Film> = Array();
  showFilm: boolean = true;
  
  constructor(private studioGhibliService: StudioGhibliService){
    studioGhibliService.GetFilms(this.films, "");
  }

  ngOnInit(): void {    
  }

  Search(title:string):void{
    // if(!this.showFilm){
    //   this.showFilm = true;
    // } else {
    //   this.showFilm = false;
    // }
    
    for (let i = 0; i < this.films.length; i++) {
      this.films.pop();
    }
    if(this.films == null){
      this.studioGhibliService.GetFilms(this.films, title); 
    }
    


  }

}
