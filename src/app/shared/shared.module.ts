import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsModule } from '../shared/components/sections/sections.module';

import { ScrollSpyDirective } from '../shared/components/scroll-spy/scroll-spy.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ScrollSpyDirective],
  imports: [
    CommonModule, 
    HttpClientModule,

    SectionsModule
  ],
  exports: [ScrollSpyDirective, SectionsModule],
  providers: [ScrollSpyDirective]
})
export class SharedModule {}
