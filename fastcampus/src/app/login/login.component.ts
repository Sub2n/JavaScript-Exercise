import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormControl, Validators
} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.email]),
    pw: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit(value: any) {
    // 유효성 검사
    const idTest = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/i;
    const pwTest = /^[A-Za-z0-9]{6,12}$/;
    if (!idTest.test(value.id)) alert('올바른 e-mail 주소를 입력하세요.');
    if (!pwTest.test(value.pw)) alert('숫자, 문자가 섞인 6 ~ 12자리 비밀번호를 입력하세요.');
  }
}
