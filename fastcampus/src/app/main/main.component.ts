import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  })
export class MainComponent implements OnInit {
  isLogin: boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getLoginStatus().subscribe(status => (this.isLogin = status));
  }
}
