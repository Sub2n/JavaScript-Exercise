import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: CoreModule
  })
export class UserService {
  getUser(): User {
    return { id: 1, name: 'Subin', admin: true };
  }
}
