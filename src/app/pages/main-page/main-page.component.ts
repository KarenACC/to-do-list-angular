import { Component } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(public todoListService:TodoListService){ }
  get tasks():Task[]{
    return [...this.todoListService.tasks]
  }

  get done():Task[]{
    return [...this.todoListService.done]
  }

  onNewTask(task:Task){
    this.todoListService.addTask(task);
  }

  onCompleteTask(task:Task){
    this.todoListService.handleTaskCompleted(task);    
  }

  onUncompleteTask(task:Task){
    this.todoListService.handleTaskCompleted(task)
  }

}
