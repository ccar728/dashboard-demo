import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [DatePipe]
})
export class TimeComponent implements OnInit {
  public myDate: any = new Date();
  constructor(private datePipe: DatePipe){
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }

}
