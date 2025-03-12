import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators, Form  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { VagasService } from '../services/vagas.service';
import {MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef} from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButton,

  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  form: FormGroup


  constructor(private formbuilder: FormBuilder,
    private service: VagasService,
    private router: Router,
  ) {
    this.form = this.formbuilder.group({
      numero: [null],
      tipo: [null],
      valorporhora: [null],
      estatos: [null],
    })
  }



  ngOnInit(): void {
      
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this._snackBar.open("Vaga Adicionada", "", {
      duration: 5000,
    });
    this.router.navigate(['/inicio'])
  }

  onCancel() {
    this.router.navigate(['/inicio'])
  }

}

  

