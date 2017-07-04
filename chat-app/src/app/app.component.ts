import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { chat } from './chat/chat.component';

@Component({
  selector: 'app-root',
  template: `
      <chat></chat>
      `
})

export class AppComponent {
  title = 'app';
}
