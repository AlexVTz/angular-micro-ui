import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public customEvent;

  sendEvent(value: string, detail: any) {
    this.customEvent = new CustomEvent(value, {detail})
    dispatchEvent(this.customEvent)
  }

  constructor() { }
}