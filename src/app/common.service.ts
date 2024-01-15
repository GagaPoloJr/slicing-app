import { Injectable } from '@angular/core';
import baseUrl from './config';
import { NavbarItem } from './interface';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiNavbar = baseUrl('nav-items');

  constructor() {}

  async getNavbarItems(): Promise<NavbarItem[]> {
    const data = await fetch(this.apiNavbar);
    return (await data.json()) ?? [];
  }
}
