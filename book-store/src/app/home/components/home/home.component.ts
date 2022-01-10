import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/model/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  books:BookModel[];
  
  ngOnInit(): void {
    this.books = [];
    
    let book1 = new BookModel();
    book1.name = "Something New";
    book1.author = "Ashish Kumar";
    book1.desc = "Once you read it, twice you miss it!";
    book1.id = 1;
    book1.price = 499;
    book1.imgSrc = "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg";
    this.books.push(book1);

    let book2 = new BookModel();

    book2.name = "Another of the book";
    book2.author = "Swati Rani";
    book2.desc = "buy it today get it tomorrow, read it by sunday!";
    book2.price = 699;
    book2.id = 2;
    book2.imgSrc ="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    this.books.push(book2);
  }

}
