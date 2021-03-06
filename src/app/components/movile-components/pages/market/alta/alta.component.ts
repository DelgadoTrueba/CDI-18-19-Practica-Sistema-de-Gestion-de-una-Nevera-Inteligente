import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { User } from 'src/app/model/usuario';
import { ErrorStateMatcher } from '@angular/material';
import { GlobalService } from 'src/app/services/global.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public userForm: FormGroup; 
  public user: User = new User("", "", "", "","","123456789101112", "");

  matcher = new MyErrorStateMatcher();
  alta;
  nombre2: any;

  constructor(
    private _formBuilder: FormBuilder,
    private globalService: GlobalService
  ){ }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.alta = this.globalService.getAlta();
    this.nombre2 = this.globalService.nombre;
  }

  nombre;
  apellidos;
  email;
  password;
  confirmPassword;
  dominicilio;

  createFormControls(){
      this.nombre = new FormControl('', [Validators.required]),
      this.apellidos = new FormControl('', [Validators.required]),
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      this.password = new FormControl('', [
        Validators.required,
        Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_%]).{6,20})"),
      ]),
      this.confirmPassword = [''],
      this.dominicilio = new FormControl('', [Validators.required]);

  }
  createForm(){
    this.userForm = this._formBuilder.group({
      nombre: this.nombre ,
      apellidos: this.apellidos ,
      email: this.email ,
      password: this.password ,
      confirmPassword: this.confirmPassword ,
      dominicilio: this.dominicilio
    }, { validator: this.checkPasswords });

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit(){
  }

  onReset(myUserform){
    myUserform.reset();
  }

  darAlta(){
    console.log(this.userForm.value.nombre);

    this.globalService.darDeAlta();
    this.alta = true;
    this.nombre2 = this.userForm.value.nombre;
    this.globalService.addNombre(this.nombre2);
  }

}
