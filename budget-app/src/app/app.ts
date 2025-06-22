import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'budget-app';

  baseUrl = environment.apiUrl;

  private http = inject(HttpClient)

  testApi = () => {
    this.http.get(`${this.baseUrl}/hello`, { responseType: 'text'}).subscribe({
      next: (res) => console.log('✅ API response:', res),
      error: (err) => console.error('❌ API error:', err)
    })
  }
}
