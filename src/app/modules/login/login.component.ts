import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@services/integrations/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  passwordVisible: boolean= false;
  loginForm: FormGroup;
  private emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm =  this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    })
  }

  ngOnInit(): void {
  }

  onLogin(event: MouseEvent) {
    event.preventDefault();
    this.authService.loginWithEmail(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).then((data) => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log("ERROR",error)
    })
  }
}
