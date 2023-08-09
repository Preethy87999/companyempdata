import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  form: any;
  
  constructor() { 
    this.form =new FormGroup({
     fullname:new FormControl('',[Validators.required,
    Validators.minLength(5)
    ]),
     empid :new FormControl(),
     address:new FormControl(),
     doj:new FormControl(),
    salary:new FormControl() 
         });
  }
  get fullname(){
    return this.form.get('fullName');
  }
  ngOnInit(): void {
  }

}

