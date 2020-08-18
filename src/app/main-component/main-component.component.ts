import { Component, OnInit } from '@angular/core';


//custom
import { StudioGhibliService } from './studio-ghibli.service';
import { Film } from './film';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  films: Array<Film> = Array();
  showFilm: boolean = true;
  id: string;
  
  constructor(private studioGhibliService: StudioGhibliService){
    studioGhibliService.GetFilms(this.films, "");
  }

  ngOnInit(): void {    
  }

  Search(title:string):void{
    
    
    for (let i = 0; i < this.films.length; i++) {
      if(this.films[i].title == title){
        this.id = this.films[i].id;
        console.log(this.id);
        
      }
    
      this.films.pop();
    }
    
      this.studioGhibliService.GetFilms(this.films, this.id)
      console.log(this.films[0].title);
    
    
    


  }

}
