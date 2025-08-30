import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Analytics, logEvent } from '@angular/fire/analytics';

import { bounceIn } from 'ng-animate';

import { environment } from 'src/environments/environment';

declare let require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounce', [
      transition(
        '* => *',
        useAnimation(bounceIn, {
          params: {
            timing: 3,
            delay: 0,
            a: '3000px',
            b: '-25px',
            c: '10px',
            d: '-5px'
          }
        })
      )
    ])
  ]
})
export class HomeComponent implements OnInit, AfterContentInit {
  @Input() themeType: string;
  public bounce: number = 1;

  constructor(
    private analytics: Analytics
  ) {
    setInterval(() => {
      this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
    }, 3000);
  }

  ngOnInit(): void { }

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      });
    }, 2000);
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

      logEvent(this.analytics, 'scroll_to_section', {
        categoria: 'navegacao',
        label: `Scroll para ${section}`
      });
    }
  }
}
