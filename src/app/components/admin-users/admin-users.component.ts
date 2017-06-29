import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {ModalUserComponent} from  '../modal-user/modal-user.component'
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: [any];
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  addPerson() {
    let dialogRef = this.dialog.open(ModalUserComponent,{disableClose:true});
  }
}
