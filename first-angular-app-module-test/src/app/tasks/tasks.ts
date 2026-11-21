import { Component, input, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask: boolean = false;
  constructor(private taskService: TasksService) {}

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseTask() {
    this.isAddingTask = false;
  }
}
