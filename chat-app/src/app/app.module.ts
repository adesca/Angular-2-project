import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };


import { AppComponent } from './app.component';
import { chat } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    chat
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
