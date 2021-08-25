import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { ComicsComponent } from '../comics.component';
import { Comic } from './comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  comics: Comic[] = [];

  constructor(private comicService: ComicsService) {

  }

  ngOnInit(): void {
    this.comics = this.comicService.getComics();
  }

}
