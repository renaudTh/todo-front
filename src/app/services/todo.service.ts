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

  async checkTodo(todo: Todo){
    let res = await fetch(`${this.apiUrl}`,{
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    let data = res.json();
    return data;
  }

  async getActive(){
    let res = await fetch(`${this.apiUrl}/active`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = res.json();
    return data;
  }
  async getCompleted(){
    let res = await fetch(`${this.apiUrl}/completed`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = res.json();
    return data;
  }

  async clearCompleted(){
  await fetch(`${this.apiUrl}/completed`,{
      method: 'DELETE',
    });
  }
}
