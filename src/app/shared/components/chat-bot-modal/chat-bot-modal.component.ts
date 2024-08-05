import { ChatbotService } from '../../../shared/services/chat-bot/chat-bot.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;
}

@Component({
  selector: 'app-chat-bot-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ChatbotService],
  templateUrl: './chat-bot-modal.component.html',
  styleUrls: ['./chat-bot-modal.component.css']
})
export class ChatBotModalComponent {

  msg: string = '';
  resultados: Message[] = [];

  @Input()
  isOpen: boolean = true;

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(private chatBoot: ChatbotService) {
    this.initBoot();
  }

  initBoot() {
    this.resultados = [];
    this.resultados.push({ remetente: 'boot', mensagem: 'Olá, eu sou o chatboot, como posso te ajudar?', data: new Date() });
  }

  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() });
    this.msg = '';
    // this.chatBoot.getResponse(this.removerAcentos(this.msg))
    //   .subscribe((lista: any) => {
    //     lista.result.fulfillment.messages.forEach((element: any) => {
    //       this.resultados.push({ remetente: 'boot', mensagem: element.speech, data: lista.timestamp });
    //     });
    //   });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  private removerAcentos(s: any) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
