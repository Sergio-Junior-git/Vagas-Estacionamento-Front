import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators  } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {



  constructor() {
    
  }



  ngOnInit(): void {
      
  }

}

  

