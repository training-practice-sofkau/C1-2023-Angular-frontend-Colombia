import { Component, OnInit } from '@angular/core';
import { IItems } from '../../interfaces/items.interface';
import { ToDoListService } from '../../services/to-do-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  routeDashboard: string[];
  routeAdd: string[];
  routeDelete: string[];

  //variables consultas
  itemId!: string;
  // Data
  calendarToDo!: IItems;
  //variables util
  taskId!: string;
  title!: string;
  isCompleted!: boolean;

  constructor(
    private readonly toDoList$: ToDoListService,
    private router: Router
  ) {
    this.routeDashboard = ['../']; //le envio el id
    this.routeAdd = ['add'];
    this.routeDelete = ['delete', 'id'];
    // this.calendarToDo = new Array<IItems>();
  }

  ngOnInit(): void {
    this.toDoList$.getAllByUser().subscribe({
      next: data => {
        this.calendarToDo = data;
      },
      error: err => console.log(err),
    });
  }

  modal(itemId: string, title: string): void {
    this.taskId = itemId;
    this.title = title;
    this.isCompleted = true;
  }

  deleteItem(id: string): void {
    this.toDoList$.delete(id).subscribe({
      next: data => this.ngOnInit(),
      error: err => console.log(err),
    });
  }
}