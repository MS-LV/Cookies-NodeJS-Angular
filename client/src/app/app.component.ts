import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000',{withCredentials: true}).subscribe((next) => {
      console.log(next);
    })

    const url = 'http://localhost:5000/'; // URL вашего сервера
    const data = { key: 'value' }; // Ваши данные для отправки

    const options = { withCredentials: true };

    this.http.post(url, data, options).subscribe(response => {
      // Обработайте ответ
    });
  }
}
