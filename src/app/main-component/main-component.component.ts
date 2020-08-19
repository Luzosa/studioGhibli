import { Component, OnInit } from '@angular/core';


//custom
import { StudioGhibliService } from './studio-ghibli.service';
import { Film } from './film';
import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  currentFilms: Array<Film> = Array();
  filmDatabase: Array<Film> = Array();
  id: Array<string> = Array();
  myForm: FormGroup;

  constructor(private studioGhibliService: StudioGhibliService, private fb: FormBuilder){
    studioGhibliService.GetFilms(this.currentFilms);
    studioGhibliService.GetFilms(this.filmDatabase);
    
    
    
  }

  ngOnInit(): void {   
    this.myForm = this.fb.group({
      title: new FormControl(''),
     }) 

  }


  
  search(form: FormGroup){
    console.log(form['title']);
    
    if(form['title'] != ""){
      let j = 0;
      for (let i = 0; i < this.filmDatabase.length; i++) {
        if(this.filmDatabase[i].title.toLowerCase().includes(form['title']) || this.filmDatabase[i].title.includes(form['title'])){
          this.id[j] = this.filmDatabase[i].id;
          j++;
        }
        console.log(this.filmDatabase[i].title);
        

      }
      console.log(this.id.length);

      if(this.id[0] != null){
        this.studioGhibliService.GetFilmsArray(this.currentFilms, this.id);
        this.studioGhibliService.RemoveItems(this.id);
        console.log(this.id);
        j = 0;

      }
    }
    else {
      this.studioGhibliService.GetFilms(this.currentFilms);
    }

    
      
    
      
  }


}
