import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  users: any;
  constructor(private userData: UserDataService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }

  ngOnInit(): void {
  }

  getRegisteredUserData(formData:any){
    this.userData.saveRegisteredUser(formData).subscribe((result) => {
      alert("User added");
    })
  }
}
