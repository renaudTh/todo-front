import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.css']
})
export class CheckedComponent {

  @Input() checked!:boolean;
  @Output('checkTodo') check: EventEmitter<boolean> = new EventEmitter(); 
  onCheck(){

    this.checked = !this.checked
    this.check.emit(this.checked);
  }
}
