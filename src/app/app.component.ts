import { Component, OnInit } from '@angular/core';
import { UserRegistrationModel } from './UserRegistrationModel';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-googlerecaptcha';

  registerForm!: FormGroup;
  submitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;
  registrationInfo!: UserRegistrationModel;
  constructor(private formBuilder: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit() {
      this.registerForm = new FormGroup({
          UserName: new FormControl('',[Validators.required]),
          UserEmailId: new FormControl(),
          password: new FormControl(),
          confirmPassword: new FormControl(),
      })
  }
  
  onSubmit() {
      this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
          this.tokenVisible = true;
          this.reCAPTCHAToken = `Token [${token}] generated`;
      });
  }
}
