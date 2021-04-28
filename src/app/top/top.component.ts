import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public title = 'Real-Time Dashboard (PROD)';
  constructor() { }

  ngOnInit(): void {
  }

}
