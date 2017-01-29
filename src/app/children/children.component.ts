import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ChildService } from '../child.service';

import { Child } from '../child';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})

export class ChildrenComponent implements OnInit {

  children: Child[];

  constructor(
    private router: Router,
    private childService: ChildService) { }

  ngOnInit() {
    this.childService.getChildren().then(children => this.children = children);
  }

}
