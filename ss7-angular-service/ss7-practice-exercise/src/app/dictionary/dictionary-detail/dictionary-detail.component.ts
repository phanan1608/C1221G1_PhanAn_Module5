import { Component, OnInit } from '@angular/core';
import {IWord} from '../../i-word';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail:IWord;
  wordList: IWord[];
  constructor(private dictionaryService: DictionaryService, private activatedRoute:ActivatedRoute) {
    this.wordList = this.dictionaryService.getList();
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const wordFromRoute = routeParams.get('word');
    this.wordDetail = this.wordList.find(word => word.word === wordFromRoute);
  }
  ngOnInit(): void {
  }
}
