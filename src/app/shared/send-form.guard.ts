import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormInfoService } from '../services/form-info.service';

@Injectable({
  providedIn: 'root'
})
export class SendFormGuard implements CanActivate {
  
  constructor(private formInfo: FormInfoService) {}
  
  canActivate(): boolean {
    return this.formInfo.isValid();
  }
  
}
