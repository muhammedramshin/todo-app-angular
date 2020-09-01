import { Component, OnInit } from '@angular/core';
import {TodoService} from '../service/todo.service'
import {v4 as uid} from "uuid";
import{Todo} from '../model/todo';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
todoTitle: string;
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo:Todo={
id:uid(),
title:this.todoTitle,
isComplete:false,
date: new Date,


    }
    this.todoservice.addTodo(newTodo);
    this.todoTitle= "";
  }


}
