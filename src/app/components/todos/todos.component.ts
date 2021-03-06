import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todo: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todo) => {
      this.todo = todo;
    });
  }
  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todo = this.todo.filter((t) => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo: Todo) {
    console.log(todo);

    this.todoService.addTodo(todo).subscribe((el) => {
      this.todo.push(todo);
    });
  }
}
