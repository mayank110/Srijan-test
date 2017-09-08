//-------- App Module --------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { routing } from './app.routes';
import { CoolStorageModule } from 'angular2-cool-storage';
import { AddStudentComponent } from './student/addstudent.component';
import { EditStudentComponent } from './student/editstudent.component';
import { DashboardComponent } from './student/dashboard.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2DragDropModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    CoolStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
