import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { StudioGhibliService } from './main-component/studio-ghibli.service'

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [StudioGhibliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
