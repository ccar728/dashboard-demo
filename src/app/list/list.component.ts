import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list: any[] = [];
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getData(){
    const url = 'http://rtq.chicheongweng.com:3000/securities';
    const formData = this.http.get(url).subscribe((response: any) => {
      console.log(response);
      alert(response.toString());
      this.list = response.result;
    });
  }
}
