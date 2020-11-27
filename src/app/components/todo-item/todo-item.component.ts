import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;

  constructor() { }

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

  onToggle(todo: { completed: boolean; }): void {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log(todo);
  }

}
