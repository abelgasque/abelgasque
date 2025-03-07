import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { NgImageSliderModule } from 'ng-image-slider';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { FormationComponent } from './formation/formation.component';
import { CertificationComponent } from './certification/certification.component';
import { LanguageComponent } from './language/language.component';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    UiModalComponent,
    FormationComponent,
    CertificationComponent,
    LanguageComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    NgbModule,
    FormationComponent,
    CertificationComponent,
    LanguageComponent,
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgImageSliderModule,
    IvyCarouselModule,
    NguCarouselModule,
    NgbModule
  ],
  providers: [
    PdfGeneratorService
  ]
})
export class SectionsModule { }
