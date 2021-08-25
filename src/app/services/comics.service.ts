import { Injectable, OnInit } from '@angular/core';
import { Comic } from '../comics/comic/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService implements OnInit {

  public comicsArray:  Comic[]


  constructor() {
    this.comicsArray = [
      new Comic (1,'doraemon', 'https://images-na.ssl-images-amazon.com/images/I/71f0qgBb50L.jpg', '')
    ]
   }

  ngOnInit() {

  }

}
