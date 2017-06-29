import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    user: any = null;
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
    authService.getUser().then(user => {
      this.isLogged = true;
      this.user = user;
      this.isAdmin = this.user.roles.some(element => {
        return element == "admin"
      });
    }).catch(error => {
      this.isLogged = false;
    })
  }
  ngOnInit() {
  }

}
