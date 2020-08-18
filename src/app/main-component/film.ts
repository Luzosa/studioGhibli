export class Film {
    title:string;
    description:string;
    director:string;
    producer:string;
    release_date:string;
    rt_score:string;
    id: string;

    constructor(id: string,title:string, description:string, director:string, 
        producer:string, release_date: string, rt_score: string, ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.rt_score = rt_score;
        


    }


}
