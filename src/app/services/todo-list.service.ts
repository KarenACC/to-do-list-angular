import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  tasks: Task[] = []
  done:Task[] =[]

  constructor() {


    // Recuperar datos del localStorage al iniciar el servicio
    this.tasks = this.getTasksFromLocalStorage('tasks') || [];
    this.done = this.getTasksFromLocalStorage('done') || [];
  }

  addTask(task:Task):void{
    const newTask: Task={id:uuid(), ...task }
    this.tasks.push(newTask);   
    this.saveTasksToLocalStorage('tasks', this.tasks);
    console.log('este es el arreglo',this.tasks);
    
  };

  handleTaskCompleted(task:Task) {
    if(task.completed===true){
      let id= task.id
      let copyTasks= this.tasks.filter(task => task.id !== id)
      this.tasks= copyTasks;      
      this.done.push(task);
      this.saveTasksToLocalStorage('tasks', this.tasks);
      this.saveTasksToLocalStorage('done', this.done);
      
    } else{
      let id= task.id
      let copyTasks= this.done.filter(task => task.id !== id)
      this.done=copyTasks;

      this.tasks.push(task)
      this.saveTasksToLocalStorage('tasks', this.tasks);
      this.saveTasksToLocalStorage('done', this.done);
    }
  }

  private saveTasksToLocalStorage(key: string, tasks: Task[]): void {
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  private getTasksFromLocalStorage(key: string): Task[] | null {
    const tasksData = localStorage.getItem(key);
    return tasksData ? JSON.parse(tasksData) : null;
  }
  
}