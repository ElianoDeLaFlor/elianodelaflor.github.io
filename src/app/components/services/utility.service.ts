import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public saveSymbol(val: Array<string>): void {
    this.saveInSession("Symbol", val);
  }

  private saveInSession(key: string, val: Array<string>): void {
    window.localStorage.setItem(key, val.toString());
  }

  public deleteSymbol(): void {
    window.localStorage.removeItem("Symbol");
  }

  public getSymbol(): string | null {
    return this.getSession("Symbol");
  }

  private getSession(key: string): string | null {
    return window.localStorage.getItem(key);
  }
}
