import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClickOutsideModule } from 'ng-click-outside';

import { SharedModule } from '../shared/shared.module';
import { LoaderModule } from '../shared/components/loader/loader.module';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    ClickOutsideModule,
    LoaderModule,
    SharedModule
  ]
})
export class LandingPageModule { }
