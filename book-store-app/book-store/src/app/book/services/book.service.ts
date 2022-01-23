import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { BookModel } from '../model/book.model';

@Injectable({
  providedIn: 'root' // * means available in the entire application
})
// * injectible means 
export class BookService {

  constructor(private http: HttpClient) { }
  
  getBooks(){
    return this.http.get("http://localhost:300/api/book")
      .pipe(map((res:any)=>res));
  }
}

// call the api. (client - > server communication)