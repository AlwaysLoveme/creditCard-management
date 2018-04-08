import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  username: string;
  psd: string;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false],
    });
  }
  login() {
    if (this.username === undefined && this.psd === undefined) {
      this.message.create('error', '请输入账号');
    }
    if (!this.username === undefined && this.psd === undefined) {
      this.message.create('error', '请输入密码');
    }
    if ( !this.username === undefined && !this.psd === undefined) {
      this.router.navigateByUrl('/home?username=' + this.username + '&psd=' + this.psd);
    }
  }
}
