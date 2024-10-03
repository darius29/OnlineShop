import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ItemService} from "../services/item.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})


export class AuthComponent {
  username:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = '';

  constructor(private authService: AuthService) {

  }

  submitRegisterForm(){
    let payload = {
      username: this.username,
      email:  this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    // TODO
    this.authService.register(payload).subscribe((response: any) => {
      console.log(response)
    });



  }

  submitLoginForm() {
    let payload = {
      email:  this.email,
      password: this.password,
    };

    this.authService.login(payload).subscribe((response: any) => {
      console.log(response)
    });
  }
}
