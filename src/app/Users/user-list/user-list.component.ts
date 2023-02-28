import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Shared/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Users:User[] | null = null;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.GetAllUsers().subscribe((data) =>  { 
      this.Users = data
      console.log(data);
   });
  }

}
