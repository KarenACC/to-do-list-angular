import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html', 
  styleUrl: './list.component.css'
})
export class ListComponent {

  task: Task ={
    title:''
  };

  @Input()
  taskList: Task[]=[];

  @Output()
    completeTaskList: EventEmitter <any> = new EventEmitter();

  markTask(task:Task){
    task.completed=true;
    this.completeTaskList.emit(task);
    
  }
}
