export class Film {
    title:string;
    description:string;
    director:string;
    producer:string;
    release_date:string;
    rt_score:string


    constructor(title:string, description:string, director:string, 
        producer:string, release_date: string, rt_score: string,){

        this.title = title;
        this.description = description;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.rt_score = rt_score;


    }


}
