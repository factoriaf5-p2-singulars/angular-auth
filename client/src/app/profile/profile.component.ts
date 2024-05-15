import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
@Input() id!:string;
private userService = inject(UserService);

user:any;
async ngOnInit() {
  console.log(this.id);
  this.user =await this.userService.getUserById(this.id);
}

}
