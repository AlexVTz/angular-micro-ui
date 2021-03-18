import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-micro-ui',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public robotName : string = 'default';

  ngOnInit() {
    addEventListener('send-robot', (evt : CustomEvent) => {
      this.robotName = evt.detail;
    })
  }

  imageUrl () {
    return `https://robohash.org/${this.robotName}.png`;
  }
}
