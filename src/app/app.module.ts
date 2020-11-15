import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule, NzIconModule, NzInputModule, NzSelectModule } from 'ng-zorro-antd';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavComponent } from './nav/nav.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NavComponent, BreadcrumbsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
