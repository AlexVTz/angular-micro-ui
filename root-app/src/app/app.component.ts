import { Component, OnInit } from '@angular/core';
import { microApps } from '../constants/micro-application-config.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  private mainMicroApp = microApps['main-micro-ui'];
  private contentMicroApp = microApps['content-micro-ui'];

  ngOnInit() {
    this.loadMicroApp(this.mainMicroApp, "main-micro");
    this.loadMicroApp(this.contentMicroApp, "content-micro");
  }
  

  public loadMicroApp(config: any, containerId: string) {
    //add script tag
    const script = document.createElement('script');
    script.src = config.path;
    document.body.appendChild(script);

    // add app
    const frontend = document.createElement(config.name);
    const content = document.getElementById(containerId);
    content.appendChild(frontend);
  }
}
