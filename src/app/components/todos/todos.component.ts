import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}
  async ngOnInit(): Promise<void> {
    this.todoList = await this.todoService.getAll();
  }

  async onAddTodo(todo:Todo){
    let newTodo = await this.todoService.addTodo(todo);
    this.todoList.push(newTodo);
    
  }

  onDeleteTodo(id:number){
    this.todoService.deleteTodo(id);
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}
