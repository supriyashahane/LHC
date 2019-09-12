import { Component, OnInit } from '@angular/core';

declare function openPage(pageName, elmnt, color): any;
declare var pageName: any;
declare var elmnt: any;
declare var color: any;

@Component({
  selector: 'app-chat-config',
  templateUrl: './chat-config.component.html',
  styleUrls: ['./chat-config.component.scss']
})
export class ChatConfigComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    openPage(pageName, elmnt, color);
  }
}
