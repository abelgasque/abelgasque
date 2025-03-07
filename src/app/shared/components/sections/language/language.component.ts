import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public listSkill: any[];

  constructor() { 
    this.listSkill = [
      {
        name: 'Português',
        description: 'Fluente ou nativo',
        per: '100%',
        value: 100,
        theme: 'success'
      },
      {
        name: 'Inglês',
        description: 'Nível básico',
        per: '30%',
        value: 30,
        theme: 'warning'
      },
    ];
  }

  ngOnInit(): void {
  }

}
