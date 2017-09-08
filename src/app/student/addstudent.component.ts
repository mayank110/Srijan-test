//-------Add Student Component -------
import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  moduleId: module.id,
  selector: 'editstudent',
  templateUrl: '../../templates/addstudent.html',
  styleUrls: ['../../style/addstudent.component.css']
})

export class AddStudentComponent
{
  private studentData:any;
  private addStudentEntityForm: FormGroup; // our model driven form
  private sectionArray = ['A','B','C'];
	constructor(private router:Router,private _fb: FormBuilder,private localStorage: CoolLocalStorage) 
  {
    //get Item from local storage
    this.studentData = JSON.parse(localStorage.getItem('studentEntity'));
    //id for next record
    let newId = this.studentData[this.studentData.length-1]['id']+1;
    //fields for student form
    this.addStudentEntityForm = this._fb.group({
        id: [newId],
        firstName: ['', [<any>Validators.required]],
        lastName: ['', [<any>Validators.required]],
        rollNo: ['', [<any>Validators.required]],
        address:[''],
        contact: ['', [<any>Validators.required]],
        section:['',[<any>Validators.required]]
    },{});
  }
  //student form submitted
  save(model, isValid: boolean)
  {
    if(isValid == true) {
      this.studentData.push(model);
      //set item to local storage
      localStorage.setItem('studentEntity', JSON.stringify(this.studentData));
      this.router.navigate(['/dashboard']);
    }
  }
}