import { Injectable } from '@angular/core';
import baseUrl from './config';
import { People } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  apiPeople = baseUrl('people');

  constructor() {}

  async getPeopleItems(): Promise<People[]> {
    const data = await fetch(this.apiPeople);
    return (await data.json()) ?? [];
  }
}
