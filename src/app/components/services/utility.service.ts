import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // save symbols to the local storage
  public saveSymbol(val: Array<string>): void {
    this.saveInSession("Symbol", val);
  }

  /**Save data to the local storage
   * 
   * @param key string, the key in the local storage
   * @param val Array<string>, the coolection of the symbols 
   */
  private saveInSession(key: string, val: Array<string>): void {
    window.localStorage.setItem(key, val.toString());
  }

  /**Delete the saved symbols from the local storage
   * 
   */
  public deleteSymbol(): void {
    window.localStorage.removeItem("Symbol");
  }

  // get symbol from the local storage
  public getSymbol(): string | null {
    return this.getSession("Symbol");
  }

  /** Retrieve the data from the local storage based on the giving key
   * 
   * @param key string
   * @returns string | null
   */
  private getSession(key: string): string | null {
    return window.localStorage.getItem(key);
  }
}
