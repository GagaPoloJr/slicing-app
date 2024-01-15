import { Injectable } from '@angular/core';
import baseUrl from './config';
import { Video } from './interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiVideo = baseUrl('videos');

  constructor() {}

  async getVideoItems(): Promise<Video[]> {
    const data = await fetch(this.apiVideo);
    return (await data.json()) ?? [];
  }
}
