import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../models/user';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl
  private http = inject(HttpClient);
  constructor() { }
  async getUserById(id:string){
    // return this.http.get<User>(this.url.concat('/users/',id))

    const result = await firstValueFrom(this.http.get<User>(this.url.concat('/users/',id)));

    const user = {
      email:result.email,
      id:result.id,
    }


    return user;
  }
}
