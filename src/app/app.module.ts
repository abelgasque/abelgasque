import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { ClickOutsideModule } from 'ng-click-outside';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { LoaderModule } from './components/loader/loader.module';
import { SharedModule } from './components/shared/shared.module';

const analyticsId = environment.googleAnalyticsId;

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LoaderModule,
    ClickOutsideModule,
    SharedModule,
    NgxGoogleAnalyticsModule.forRoot(analyticsId)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
