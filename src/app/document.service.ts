import { Injectable } from '@angular/core';
import baseUrl from './config';
import { Document } from './interface';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  apiDocument = baseUrl('documents');

  constructor() {}

  async getDocumentItems(): Promise<Document[]> {
    const data = await fetch(this.apiDocument);
    return (await data.json()) ?? [];
  }
}
