import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title:string = '';
  details :string ='';

  @Output('addTodo') submit:EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  onSubmit(event:Event){
    event.preventDefault();
    if(!this.title){
      alert("You must type a title!");
      return;
    }
    let toSend:Todo = {
      title: this.title,
      details:this.details,
      date: Date.now().toString()
    }
    this.submit.emit(toSend);

    this.title=''
    this.details=''
  }
}
