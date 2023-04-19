import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  @Input() todo!:Todo;
  @Output('deleteTodo') delete:EventEmitter<number> = new EventEmitter();

  onDelete(){
    this.delete.emit(this.todo.id);
  }
}
