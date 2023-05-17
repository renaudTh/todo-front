import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Input() itemsNumber!:number;
  @Output('selectFilter') selectFilter: EventEmitter<number> = new EventEmitter();
  @Output('clearCompleted') clearCompleted: EventEmitter<void> = new EventEmitter();

  filters = [{
    id:1,
    name: "All"
  },
  {
    id: 2,
    name: "Active",
  },
  {
    id: 3,
    name: "Completed"
  }
]
selected:number = 1; 
onSelect(id:number){
  this.selected = id;
  this.selectFilter.emit(id);

}
setClass(id:number){
  return (id === this.selected) ? 'filter active' : 'filter'
}

onClearCompleted(){
  this.clearCompleted.emit();
}
}
