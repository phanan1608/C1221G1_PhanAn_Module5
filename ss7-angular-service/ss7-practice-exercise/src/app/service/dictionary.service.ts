import { Injectable } from '@angular/core';
import {IWord} from '../i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private dictionaryList: IWord[] = [
    {word: 'love',
    mean: 'yêu'},
    {word: 'hate',
    mean: 'ghét'}
  ];
  constructor()  { }
  getList(){
    return this.dictionaryList;
  }

}
