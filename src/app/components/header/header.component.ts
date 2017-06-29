import { Component, OnInit, Input} from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isAdmin;
  @Input() isLogged;
  
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
      this.authService.logout().then(ok=>{
         this.router.navigate([""])
      })
  }

  goHome(){
    this.router.navigate([""])
  }

}
