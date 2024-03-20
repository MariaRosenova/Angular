import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

const apiKey : string = '5bd9cf5c33bf587ee1a3d3fb8a49ff05';

@Injectable()

export class MovieService {
    path: string = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    options : object = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey,
        }
    };
    

    constructor(private http: HttpClient) {
    }

    getPopular() : Observable<Object> {
        return this.http.get(`${this.path}${this.options}`);
    }
}