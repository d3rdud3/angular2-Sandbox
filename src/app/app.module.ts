import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { FirstInputComponent } from './fristInputComponent/firstInputComponent.component';
import {SecondInputComponent} from "./secondInputComponent/secondInputComponent.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TestComponent,
    FirstInputComponent,
    SecondInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    //GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
