import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatBotModalComponent } from '../../../shared/components/chat-bot-modal/chat-bot-modal.component';

@Component({
  selector: 'app-how-you-feels-section',
  standalone: true,
  imports: [CommonModule, ChatBotModalComponent, ChatBotModalComponent],
  providers: [ Clipboard, ToastrNotificationService, NgModule, FormsModule],
  templateUrl: './how-you-feels-section.component.html',
  styleUrl: './how-you-feels-section.component.css'
})
export class HowYouFeelsSectionComponent {
  

  constructor(private clipboard: Clipboard, private toastr: ToastrNotificationService) {   

  }

  isChatBotOpen: boolean = false;

  openChatBot() {
    this.isChatBotOpen = true;
  }

  closeChatBot() {
    this.isChatBotOpen = false;
  }

  coppyNumberCall() {
    
    const number = '0800 000 0000';
    this.clipboard.copy(number);
    this.toastr.showSuccess('Numero de telefone copiado com sucesso', 'Success');
  }

  openScheduleSupportModal() {
  }
}
