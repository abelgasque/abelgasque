import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  listFormation: any[];

  constructor() {
    this.listFormation = [
      {
        company: 'Estácio de Sá',
        occupation: 'Sistemas de Informação',
        dtStart: 'Janeiro de 2020',
        dtEnd: 'Dezembro de 2024',
        description: 'O curso de Sistemas de Informação apresenta aos nossos alunos o universo do fluxo de dados que circulam por redes de computadores. Eles aprendem a desenvolver processos e sistemas de informática, com o objetivo de disponibilizar esse material para usuários de redes. O mercado de trabalho nesta área é amplo e segue em curva crescente no Brasil. O curso de Sistemas de Informação, com duração de 4 anos(8 períodos), apresenta aos nossos alunos, disciplinas como Matemática, Cálculo Diferencial e Algoritmos para o melhor entendimento das teorias aplicadas neste setor. Na parte específica do curso, os estudantes aprendem sobre linguagem de programação, bancos de dados e engenharia de software. A arquitetura de redes de computadores também está entre os conteúdos ensinados. A maior demanda por profissionais está nos grandes centros, que concentram os maiores desenvolvedores de software.',
      },
      {
        company: 'SENAI/SC - Serviço Nacional de Aprendizagem Industrial',
        occupation: 'Técnico em Informática Integrado ao Ensino Médio',
        dtStart: 'Janeiro de 2017',
        dtEnd: 'Dezembro de 2019',
        description: 'Técnico focado no desenvolvimento de software com conceitos de algoritmos, lógica de programação, boas praticas para desenvolvimento de produtos de software, gestão de operações, desenvolvimento de sistemas web com JSF / JSP, desenvolvimento de aplicativos mobiles com Android Studio, desenvolvimento de banco de dados relacionais, modelagem de banco de dados relacionais e metodologias ágeis com Scrum.',
      },
    ];
  }

  ngOnInit(): void {
  }

}
