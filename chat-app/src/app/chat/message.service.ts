import { Injectable } from '@angular/core';
import { Message } from './Message';
import { SocketIO } from './socket-io.service';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs';

const MessageList: Message[] = [
];

@Injectable ()
export class MessageService {
  let

  constructor(private socket: Socket) {
    var numbers = Observable.interval(1000).take(5);
    numbers.subscribe(num => MessageList.push(this.transform(num)),
            () => console.log("error"),
            () => console.log("done"));
  }

  getMessages(): Message[] {
    return MessageList;
  }

  addMessage(): void {
    MessageList.push({time: "2017-07-02T21:05:46.743Z", text: "hi"});
  }

  private transform(any): Message {
    let transformedMessage = new Message();
    transformedMessage.text = "sample text";
    transformedMessage.time = "123";

    return transformedMessage;
  }

}
