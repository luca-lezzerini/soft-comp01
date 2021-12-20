import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  v1: string = "Happy New Year!";

  passo: number = 1;
  valore: number = 0;

  constructor(private http: HttpClient) { }

  trova1(ev: string) {
    console.log("Mi hai chiesto di cercare per ... ", ev)
    let oss: Observable<any[]> = this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts");
    oss.subscribe(r => console.log(r));
  }

  trova2(ev: string) {
    console.log("Mi hai chiesto di cercare per ... ", ev)
    let oss: Observable<any[]> = this.http.get<any[]>("https://jsonplaceholder.typicode.com/comments");
    oss.subscribe(r => console.log(r));
  }

  cambia() {
    this.v1 = "Merry XMas!";
  }

  aggiornaValore(n: number) {
    this.valore = n;
  }

}
