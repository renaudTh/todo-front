import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent {
  checked:boolean = false;

  @Output('checkTodo') check: EventEmitter<boolean> = new EventEmitter(); 
  onCheck(){

    this.checked = !this.checked
    this.check.emit(this.checked);
  }
}
