
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nomusic';

  constructor(private authService: AuthService){}

  ngOnInit() {
  }

  isLogged(){
    return this.authService.isLoggedIn();
  }

  isLoggedOut(){
    return this.authService.isLoggedOut()
  }

  logout(){
    this.authService.logout()
  }
}
