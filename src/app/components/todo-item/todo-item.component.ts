import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  // Set Dynamic classes
  setClasses(): { todo: boolean; 'is-complete': any } {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: any): void {
    // toggle in ui
    todo.completed = !todo.completed;
    // toggle on server
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

}
