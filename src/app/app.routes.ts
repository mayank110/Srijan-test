// ====== ./app/app.routes.ts ======
//Define Routes Here

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './student/addstudent.component';
import { EditStudentComponent } from './student/editstudent.component';
import { DashboardComponent } from './student/dashboard.component';

export const routes: Routes = [
	{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'dashboard',
    component: DashboardComponent 
  },
	{
    path: 'student',
    children:[
	    {
	      path:'add',
	      component:AddStudentComponent
	    },
	    {
	      path: 'edit/:id',
	      component: EditStudentComponent 
	    },
    ]
 },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);