import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeCourseService } from './services/listeCourse.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {MaterialModule} from './material.module';


import { AppComponent } from './app.component';



import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { MesListesComponent } from './mes-listes/mes-listes.component';
import { CreateListeComponent } from './create-liste/create-liste.component';
import { CreateListeNameComponent } from './create-liste-name/create-liste-name.component';
import { SingleListComponent } from './single-list/single-list.component';
import { CreateFoodComponent } from './create-food/create-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    AdminComponent,
    MesListesComponent,
    CreateListeComponent,
    CreateListeNameComponent,
    SingleListComponent,
    CreateFoodComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [ListeCourseService],
  bootstrap: [AppComponent],
  
  exports:[
    MaterialModule,
    
    
  ]
  
})
export class AppModule { }