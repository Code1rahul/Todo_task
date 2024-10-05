import {
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<{
  //   title: string;
  //   summary: string;
  //   date: string;
  // }>();

  enterTitle = '';
  enterSummary = '';
  enterDate = '';
  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enterTitle,
        summary: this.enterSummary,
        date: this.enterDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
