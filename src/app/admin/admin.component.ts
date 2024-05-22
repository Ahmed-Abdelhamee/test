import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { person } from '../interfaces/person.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  arr:person[]=[]

  Person = this.formBuilder.group({
    personID: [new Date().getTime(), Validators.required],
    name: ["", Validators.required],
    age: [0, Validators.required],
    nationalityID: [0, Validators.required],
    birthDate: [0, Validators.required],
  })

  controlView: string = ""

  constructor(private formBuilder: FormBuilder, private dataServ: DataService) { 
    dataServ.getData().subscribe(data=>{
      for (const key in data) {
        this.arr.push(data[key])
      }
    })
  }

  submit() {
    if (this.Person.valid) {
      if (this.controlView == "add") {
        this.dataServ.createStudent(this.Person.value).subscribe(()=>{
          location.reload()
        });
      }
      else if (this.controlView == "edit") {
        this.dataServ.editStudent(this.Person.value,"").subscribe(()=>{
          location.reload()
        });
      }else {
        this.dataServ.deleteStudent().subscribe(()=>{
          location.reload()
        });
      }
    }
  }

}
