import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  public listCertification: any[];

  constructor() {
    this.listCertification = [
      {
        company: 'GDG Floripa',
        occupation: 'DevFest Sul 2022',
        dtStart: 'Dezembro de 2022',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'Front in Floripa',
        occupation: 'Front in Floripa 2022',
        dtStart: 'Novembro de 2022',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'Rocketseat',
        occupation: 'Assemble',
        dtStart: 'Agosto de 2022',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'Floripa Tech Day',
        occupation: 'Floripa Tech Day 2022',
        dtStart: 'Julho de 2022',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'Cisco Networking Academy',
        occupation: 'Cybersecurity Essentials',
        dtStart: 'Maio de 2020',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
      {
        company: 'AlgaWorks',
        occupation: 'Fullstack Angular e Spring',
        dtStart: 'Abril de 2019',
        dtEnd: 'Sem data de expiração',
        description: null,
      },
    ];
  }

  ngOnInit(): void {
  }

}
