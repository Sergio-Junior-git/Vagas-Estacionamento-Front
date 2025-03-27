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
  styleUrl: './form.component.css',
  template: `
  <form [formGroup]="formulario" (ngSubmit)="enviar()">
    <input formControlName="nome" placeholder="Nome">
    <span *ngIf="formulario.controls['nome'].invalid && formulario.controls['nome'].touched">
      Nome obrigatório
    </span>
    <button type="submit">Enviar</button>
  </form>
 `
})
export class FormComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  form: FormGroup


  constructor(private formbuilder: FormBuilder,
    private service: VagasService,
    private router: Router,
  ) {
    this.form = this.formbuilder.group({
      numero: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      tipo: [null,  Validators.required],
      valorporhora: [null, [Validators.required, Validators.min(0)]],
      status: [null , Validators.required],
    })
  }



  ngOnInit(): void {
      
  }

  onSubmit() {
    if (this.form.invalid) {
      this._snackBar.open("Campos invalidos, por favor tente novamente", "", {
        duration: 5000,
      });
      return; // Para evitar o envio do formulário inválido
    }

    this.service.save(this.form.value).subscribe(result => console.log(result));
    this._snackBar.open("Vaga Adicionada", "", {
      duration: 5000,
    });
    this.router.navigate(['/inicio'])
  }

  onCancel() {
    this.router.navigate(['/inicio'])
    this._snackBar.open("Vaga Não idicionada", "", {
      duration: 5000,
    });
  }

}

  

