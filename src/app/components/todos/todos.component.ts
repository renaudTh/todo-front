import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: Todo[] = [];
  filterId: number = 1;
  constructor(private todoService: TodoService) { }
  async ngOnInit(): Promise<void> {
    this.todoList = await this.todoService.getAll();
  }

  async onAddTodo(todo: Todo) {
    let newTodo = await this.todoService.addTodo(todo);
    this.todoList.push(newTodo);
    
  }

  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  onUpdateTodo(todo:Todo){

    this.todoService.checkTodo(todo);
  }
  getItemsNumber() {
    return this.todoList.filter(elt => !elt.completed).length;
  }

  async selectFilter(id:number){
    this.filterId = id;
    let res = await this.todoService.getAll();
    if(id == 1){
      this.todoList = res;
    }
    else if(id == 2){
      this.todoList = res.filter((elt:Todo)=>!elt.completed)
      
    }
    else{
      this.todoList = res.filter((elt:Todo)=>elt.completed)
    }
  }

  async onClearCompleted(){
    await this.todoService.clearCompleted();
    this.selectFilter(this.filterId);
  }
}
