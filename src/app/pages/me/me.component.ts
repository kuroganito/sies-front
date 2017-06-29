import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  user:any=null;
  isLogged:boolean = false;
  isAdmin:boolean = false;
  
  constructor(private authService:AuthService) {
    authService.getUser().then(user=>{
      this.isLogged = true;
      this.user = user;
      this.isAdmin = this.user.roles.some(element=>{
        return element == "admin"
      });
    }).catch(error=>{
      this.isLogged = false;
    })
   }

  ngOnInit() {
  }

}
