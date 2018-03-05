import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor() {}

  canActivate() {
    console.dir(localStorage.getItem('transaction'));
    const transactionMade = localStorage.getItem('transaction');

    if (transactionMade === 'false') {
      return true;
    }
    return false;
  }
}
