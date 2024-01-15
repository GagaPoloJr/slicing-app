import { Injectable } from '@angular/core';
import baseUrl from './config';
import { People } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiActivity = baseUrl('activities');

  constructor() {}

  async getActivityItems(): Promise<any[]> {
    const data = await fetch(this.apiActivity);
   
    return (await data.json()) ?? [];

  }
}
