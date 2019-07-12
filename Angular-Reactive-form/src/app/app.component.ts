import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm">
      <input type="text" placeholder="userid" formControlName="userid" />
      <em *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요</em>
      <em *ngIf="userid.errors?.pattern && userid.touched">아이디를 형식에 맞게 입력해주세요</em>
      <div formGroupName="passwordGroup">
        <input type="password" placeholder="password" formControlName="password" />
        <input type="password" placeholder="confirm password" formControlName="confirmPassword" />
      </div>
      <button>Login</button>
    </form>
    <pre>userForm.value: {{ userForm.value | json }}</pre>
    <pre>userForm.valid: {{ userForm.valid }}</pre>

    <pre>passwordGroup.errors: {{ passwordGroup.errors | json }}</pre>
    <pre>passwordGroup.valid: {{ passwordGroup.valid }}</pre>
    <!--
    <pre>password.errors: {{ password.errors | json }}</pre>
    <pre>password.valid: {{ password.valid }}</pre>

    <pre>confirmpassword.errors: {{ confirmpassword.errors | json }}</pre>
    <pre>confirmpassword.valid: {{ confirmpassword.valid }}</pre>
    -->
  `,
  styles: []
  })
export class AppComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   userid: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]),
    //   passwordGroup: new FormGroup(
    //     {
    //       password: new FormControl('', [
    //         Validators.required,
    //         Validators.pattern('[a-zA-Z]{4,10}')
    //       ]),
    //       confirmPassword: new FormControl('', [
    //         Validators.required,
    //         Validators.pattern('[a-zA-Z]{4,10}')
    //       ])
    //     },
    //     PasswordValidator.match
    //   )
    // });

    // this.userForm = this.fb.group({
    //   userid: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]],
    //   passwordGroup: this.fb.group(
    //     {
    //       password: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]],
    //       comfirmPassword: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]]
    //     },
    //     { validators: PasswordValidator.match }
    //   )
    // });

    this.userForm = this.fb.group({
      userid: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]],
      passwordGroup: this.fb.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required]
        },
        { validators: PasswordValidator.match }
      )
    });
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }

  get confirmpassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }
}
