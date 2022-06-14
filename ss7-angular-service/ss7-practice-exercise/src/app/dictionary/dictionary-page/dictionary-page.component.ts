import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {IWord} from '../../i-word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList:IWord[];
  constructor(private dictionaryService: DictionaryService) {
    this.wordList =  this.dictionaryService.getList();
  }
  ngOnInit(): void {
  }

}
