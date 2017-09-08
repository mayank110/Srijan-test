//-------- App Component -----------
import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  // Dummy data for listing on Dashboard
  student = [
  {id:"1", firstName: "Mayank", lastName : "Kaushik", rollNo:"123", address:"Sikri", contact:"07790834131", section:"A"},
  {id:2, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"},
  {id:3, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"},
  {id:4, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"},
  {id:5, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"},
  {id:6, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"},
  {id:7, firstName: "Mayank", lastName : "Kaushik", rollNo:1, address:"Pune", contact:1232332, section:"A"}
];
  constructor(private router:Router,private localStorage: CoolLocalStorage)
  {
    // setting local storage for data
  	localStorage.setItem('studentEntity', JSON.stringify(this.student));
  }

}
