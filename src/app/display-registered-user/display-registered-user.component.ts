import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-display-registered-user',
  templateUrl: './display-registered-user.component.html',
  styleUrls: ['./display-registered-user.component.css']
})
export class DisplayRegisteredUserComponent implements OnInit {

  users:any;

  constructor(private userData:UserDataService) { 
    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }
  ngOnInit(): void {
  }

}
