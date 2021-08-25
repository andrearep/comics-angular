import { Injectable, OnInit } from '@angular/core';
import { Comic } from '../comics/comic/comic.model';
import { comics } from 'src/assets/assets';

@Injectable({
  providedIn: 'root'
})
export class ComicsService implements OnInit {

  public comicsArray:  Comic[]


  constructor() {
    this.comicsArray = comics;
   }

  ngOnInit() {

  }

  getComics() {
    return this.comicsArray.slice();
  }

}
