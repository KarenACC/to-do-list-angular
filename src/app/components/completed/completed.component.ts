import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {

  @Input() 
  completedTasks: Task[] = [];

  @Output()
  uncompleteTask: EventEmitter <any> = new EventEmitter();

  unmarkTask(task:Task){
    task.completed=false;
    this.uncompleteTask.emit(task);
    
    }
  }
