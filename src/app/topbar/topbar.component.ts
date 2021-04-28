import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public title = 'Real-Time Dashboard (PROD)';
  msg = 'dashboard的msg';

  public userinfo: any = {
    username: 'tom',
    age: '18',
  };
  public content = '<h2>我是html标签</h2>';
  arr = ['111', '222', '333'];
  public userList: any[] = [{
    userName: 'joy',
    age: 20,
  }, {
    userName: 'yooooooo',
    age: 18,
  }];
  constructor() {
    this.msg = '改变后的msg';
  }
  public message: any = '我是学生的div';
  ngOnInit(): void {
  }

}
