import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';

import { HttpClientModule } from "@angular/common/http";
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwardsComponent,
    PublicationsComponent,
    ResearchComponent,
  ],
  imports: [
    AppRoutingModule,
    FontAwesomeModule,
    TranslateModule, 
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
