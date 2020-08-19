import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';

//custom
import { Film } from './film'

@Injectable({
  providedIn: 'root'
})

export class StudioGhibliService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/films/';
constructor(private httpClient: HttpClient, private handler: HttpHandler) {
  
}

  GetFilms(array: Array<Film>): void {
        
    if(array.length != 0){
      this.RemoveItems(array);
    }

        this.httpClient.get(this.baseUrl).subscribe((data) => {
          // Do something with the data
  
          for (let i = 0; i < 20 ; i++) {
            let tempFilms = new Film(
              data[i].id,
              data[i].title,
              data[i].description,
              data[i].director,
              data[i].producer,
              data[i].release_date,
              data[i].rt_score,
            );
            array.push(tempFilms);
          }
        });
      }    

  GetFilmsArray(array: Array<Film>, search: Array<string>){

    if(array.length != 0){
      this.RemoveItems(array);
    }

    for (let i = 0; i < search.length; i++) {
      if(search[i] != undefined){
        let http = new HttpClient(this.handler).get(this.baseUrl + search[i]).subscribe((data) => {
          // Do something with the data
          
            let tempFilms = new Film(
              search[i],
              data.title, //giver fejl men virker
              data.description, //giver fejl men virker
              data.director, //giver fejl men virker
              data.producer, //giver fejl men virker
              data.release_date, //giver fejl men virker
              data.rt_score, //giver fejl men virker
            );
            
            array.push(tempFilms);
        });
      } else {
        search[i] = null;
      }
      
    }
  }

  public RemoveItems(array: Array<any>): Array<Film>{
    for (let i = 0; i < array.length; i++) {
      array.splice(i);
      return array;
    }
  }
  
}

