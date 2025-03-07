import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  listExperience: any[];

  constructor() {
    this.listExperience = [
      {
        company: 'Hypeone | NeoBPO',
        occupation: 'Analista de desenvolvimento de sistemas',
        type: 'CLT',
        dtStart: 'Outubro de 2022',
        dtEnd: '',
        isPresent: true,
        description: 'Desenvolvedor full stack sênior com as tecnologias .NET e Angular na equipe do produto Nex | Send um sistema web de CRM para atendimentos entre operações de call centers e seus clientes, responsável por demandas para criação de novas funcionalidades, adaptação de funcionalidades existentes e correções de bugs ou erros em time ágil gerenciado pela nuvem do Azure DevOps.',
      },
      {
        company: 'PTC Group',
        occupation: 'Analista de desenvolvimento de sistemas',
        type: 'PJ',
        dtStart: 'Junho de 2022',
        dtEnd: 'Outubro de 2022',
        isPresent: false,
        description: 'Prestação de serviços como desenvolvedor back end com PostgreSQL e NestJS na criação de novas funcionalidades, adaptação de funcionalidades existentes e correções de bugs ou erros em time ágil gerenciado pelo Jira e aplicação implantada na AWS. Alocado remotamente em uma fintech de serviços financeiros, responsável por demandas relacionadas à segurança da informação.',
      },
      {
        company: 'Code7',
        occupation: 'Analista de desenvolvimento de sistemas',
        type: 'CLT',
        dtStart: 'Setembro de 2020',
        dtEnd: 'Junho de 2022',
        isPresent: false,
        description: 'Análise e desenvolvimento de aplicações para desktops de call centers, integrações com serviços windows e serviço de internet utilizando ASP .Net com banco de dados SQL Server. Análise de bug e erros em fila N3. Implantação de serviços windows e publicação de serviço de internet em Gerenciador IIS em servidores Windows.',
      },
      {
        company: 'Grupo Floripark',
        occupation: 'Aprendiz',
        type: 'CLT',
        dtStart: 'Abril de 2019',
        dtEnd: 'Agosto de 2020',
        isPresent: false,
        description: 'Desenvolvimento de sistema web para intranet com Angular 2+, utilizando bibliotecas de componentes. Consumindo pontos finais de API REST com Spring Framework.',
      },
    ];
  }

  ngOnInit(): void { }
}
