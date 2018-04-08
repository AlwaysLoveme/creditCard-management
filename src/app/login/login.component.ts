import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

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
    private notification: NzNotificationService
  ) {}
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false],
    });
  }
  login() {
    if ((this.username === undefined && this.psd === undefined) || this.username === '') {
      this.notification.create('error', '提示', '请输入账号', { nzDuration: 1500 });
    }
    if (!(this.username === undefined) && this.psd === undefined) {
      this.notification.create('error', '提示', '请输入密码', { nzDuration: 1500 });
    }
    if ( !(this.username === undefined) && !(this.psd === undefined)) {
      this.router.navigateByUrl('/home?username=' + this.username + '&psd=' + this.psd);
    }
  }
}
