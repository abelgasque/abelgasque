import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  baseUrl: string;
  token: string;
  username: string;
  repos: any[] = [];

  get totalCommits(): number {
    return this.repos.reduce((acc, repo) => acc + (repo.totalCommits || 0), 0);
  }

  constructor(private http: HttpClient) {
    this.baseUrl = environment.github.api;
    this.token = environment.github.token;
    this.username = environment.github.username;
  }

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories(): void {
    const url = `${this.baseUrl}/users/${this.username}/repos?per_page=100`;

    this.http.get<any[]>(url, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    }).subscribe({
      next: (repos) => {
        this.repos = repos;

        this.repos.forEach((repo) => {
          const commitsUrl = `${this.baseUrl}/repos/${this.username}/${repo.name}/stats/contributors`;
          this.http.get<any[]>(commitsUrl, {
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          }).subscribe({
            next: (data) => {
              repo.totalCommits = data
                ? data.reduce((acc, c) => acc + c.total, 0)
                : 0;
            },
            error: () => {
              repo.totalCommits = 0;
            }
          });
        });
      },
      error: (err) => console.error(err)
    });
  }
}