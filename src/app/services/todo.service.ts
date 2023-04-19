import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  private apiUrl:string = "http://localhost:3000/todo"
  async getAll(){
    let res = await fetch(this.apiUrl);
    let data = res.json();
    return data;
  } 
  
  async addTodo(todo:Todo){

    let res = await fetch(`${this.apiUrl}`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    let data = res.json();
    return data;
  }

  async deleteTodo(id:number){
    let res = await fetch(`${this.apiUrl}/${id}`,{
      method: 'DELETE',
    });
    let data = res.json();
    return data;
  }
}
