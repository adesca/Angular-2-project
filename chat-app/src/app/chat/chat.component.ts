import { Component } from '@angular/core';
import { Message } from './Message';
import { MessageService } from './message.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  providers: [
    MessageService
  ]
})
export class chat {

  messages = this.messageService.getMessages();

  constructor(private messageService: MessageService) {}
}
