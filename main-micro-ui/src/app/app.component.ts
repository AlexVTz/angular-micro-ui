import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'main-micro-ui',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public robot: string = '';

  constructor(private communicationService: CommunicationService) {}

  sendRobot() {
    console.log(this.robot)
    this.communicationService.sendEvent('send-robot', this.robot);
  }
}
