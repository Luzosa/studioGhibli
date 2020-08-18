import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//custom
import { Film } from './film'

@Injectable({
  providedIn: 'root'
})

export class StudioGhibliService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/';
constructor(private httpClient: HttpClient) {
  
}

  GetFilms(array: Array<Film>, search: string): void {
    this.httpClient.get(this.baseUrl + 'films' + search).subscribe((data) => {
      // Do something with the data
      
      for (let i = 0; i < 20 ; i++) {
        if(search == ""){
            let tempFilms = new Film(
              data[i].title,
              data[i].description,
              data[i].director,
              data[i].producer,
              data[i].release_date,
              data[i].rt_score,
            );
            array.push(tempFilms);
        }
        else {
          if (search == data[i].title){
            let tempFilms = new Film(
              data[i].title,
              data[i].description,
              data[i].director,
              data[i].producer,
              data[i].release_date,
              data[i].rt_score,
            );
            array.push(tempFilms);
            i = 20
            }
        }
      }
    
    });
  }
  
}

