import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly validUser = { username: 'admin', password: '123' };

    constructor(private router: Router) { }

    login(username: string, password: string): boolean {
        if (
            username === this.validUser.username &&
            password === this.validUser.password
        ) {
            localStorage.setItem('loggedIn', 'true');
            this.router.navigate(['/home']);
            return true;
        } else {
            return false;
        }
    }
}
