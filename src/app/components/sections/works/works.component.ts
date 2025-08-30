import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  baseUrl: string;
  username: string;
  token: string;
  repos: any[] = [];
  languages: string[] = [];
  workFilter: string = 'all';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.github.api;
    this.token = environment.github.token;
    this.username = environment.github.username;
  }

  ngOnInit(): void {
    this.loadRepos();
  }

  loadRepos() {
    this.http
      .get<any[]>(`${this.baseUrl}/users/${this.username}/repos?per_page=6`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      .subscribe((data) => {
        this.repos = data;

        const langs = data
          .map((repo) => repo.language)
          .filter((lang) => lang !== null);

        this.languages = Array.from(new Set(langs)).sort();
      });
  }

  onChange(event: any) {
    this.workFilter = event.target.value;
  }
}