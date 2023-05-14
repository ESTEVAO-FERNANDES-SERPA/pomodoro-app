import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone:true,
  imports:[CommonModule, CountdownModule ]
})
export class TimerComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

}
