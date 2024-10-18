import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css',
})
export class DataDisplayComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any = [];
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }
}
