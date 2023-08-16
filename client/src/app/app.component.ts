import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000', {withCredentials: true}).subscribe((next) => {
      console.log(next);
    })
  }
}
