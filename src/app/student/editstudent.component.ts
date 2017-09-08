//------- Edit Student Component-----
import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'editstudent',
  templateUrl: '../../templates/editstudent.html',
  styleUrls: ['../../style/editstudent.component.css'] 
})

export class EditStudentComponent
{
  private studentData:any;
  public editStudentEntityForm: FormGroup; // our model driven form
  private recordId;
  private persons;
  private sectionArray = ['A','B','C'];
  private currentEntityIndex;
  private studentEntity;
	constructor(private router:Router,private _fb: FormBuilder,private _acroute: ActivatedRoute) 
  {
    // local storage data
    this.studentEntity = JSON.parse(localStorage.getItem('studentEntity'));
    let id = this._acroute.params.subscribe(params => {
      this.recordId = params['id'];//id of record that needs to be edited
    });
    this.studentData =  this.studentEntity.find(item => item.id == this.recordId);
    //get index of current object in student entity array
    this.currentEntityIndex = this.studentEntity.indexOf(this.studentEntity.find(item => item.id == this.recordId));
    this.editStudentEntityForm = this._fb.group({
        id: [this.studentData['id']],
        firstName: [this.studentData['firstName'], [<any>Validators.required]],
        lastName: [this.studentData['lastName'], [<any>Validators.required]],
        rollNo: [this.studentData['rollNo'], [<any>Validators.required]],
        address:[this.studentData['address']],
        contact: [this.studentData['contact'], [<any>Validators.required]],
        section:[this.studentData['section'],[<any>Validators.required]]
    },{});
  }
  // submit edit form
  save(model, isValid: boolean)
  {
    if(isValid == true) {
      this.studentEntity[this.currentEntityIndex] = model;
      //update record in local storage
      localStorage.setItem('studentEntity', JSON.stringify(this.studentEntity));
      this.router.navigate(['/dashboard']);
    }
  }
}