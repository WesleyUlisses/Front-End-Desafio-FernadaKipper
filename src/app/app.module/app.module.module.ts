import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterService } from '../user-portal/services/register/register.service';
import { ChatBotModalComponent } from '../shared/components/chat-bot-modal/chat-bot-modal.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ChatBotModalComponent,
    FormsModule
  ],
  providers: [RegisterService],
})
export class AppModuleModule { }
