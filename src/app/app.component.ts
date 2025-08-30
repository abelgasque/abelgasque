import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Okk';

  constructor() { }

  ngOnInit(): void {
    if (environment.production) {
      gtag('event', 'site_aberto', {
        event_category: 'navegacao',
        event_label: 'Usuário abriu o site',
        value: 1
      });
    }
  }
}