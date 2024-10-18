import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DataDisplayComponent } from './data-display/data-display.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, DataDisplayComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'servicepractise';
  httpClient = inject(HttpClient);
  data: any = [];
  filteredData: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
        this.data = data;
        this.filteredData = this.data.filter((user: any) =>
          user.name.includes('l')
        );
        console.log('filter data', this.filteredData);
      });
  }
}
