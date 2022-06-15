import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from './todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService:TodoService) {
  }

  ngOnInit() {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  getAll(){
     this.todoService.getAll().subscribe(todo=>{
       this.todos = todo;
    });
  }
  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.create(todo).subscribe(()=>{
        this.content.reset();
        this.ngOnInit();
      });
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(()=>{
      this.todoService.delete(id);
      this.ngOnInit();
    })
  }
}
