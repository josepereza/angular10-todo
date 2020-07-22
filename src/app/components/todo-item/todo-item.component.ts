import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() element: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.element.completed,
    };

    return classes;
  }

  onToggle(element: Todo) {
    // Toggle in UI
    element.completed = !element.completed;

    // Toggle on server
    this.todoService.toggleCompleted(element).subscribe((element) => {
      return console.log(element);
    });
  }

  onDelete(element: Todo) {
    this.deleteTodo.emit(element);
  }
}
