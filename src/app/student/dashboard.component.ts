//-------Dashboard Component -------
import {Component} from '@angular/core';
import { Router} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: '../../templates/dashboard.html',
  styleUrls: ['../../style/dashboard.component.css']
})

export class DashboardComponent
{
  private studentData:any;
  constructor(private router:Router,private localStorage: CoolLocalStorage) 
  {
    this.getStudentData();
  }
  // get local storage data
  getStudentData()
  {
    this.studentData = JSON.parse(localStorage.getItem('studentEntity'));
  }
  // on drop of data in delete box
  onDeleteDrop(e: any)
  {
    let deleteId = e.dragData.id;
    this.studentData = this.studentData.filter(item => item.id !== deleteId);
    //setting local storage after deletion
    localStorage.setItem('studentEntity', JSON.stringify(this.studentData));
    this.getStudentData();
  }
}