import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
		ReactiveFormsModule,
    ],
    providers: [],
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
