import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private autheService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signUp(username: string, email: string, password1: string, password2: string) {
    this.autheService.signup( username, email, password1, password2).subscribe(
      sucess => this.router.navigate(['musics'])
    )
    error => this.error = error
  }

}
