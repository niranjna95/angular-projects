import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskModel;

  private taskService = inject(TasksService);

  onCompleted() {
    this.taskService.removeTask(this.task.id);
  }
}
