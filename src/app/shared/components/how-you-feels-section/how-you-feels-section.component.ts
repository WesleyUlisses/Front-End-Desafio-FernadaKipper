import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrNotificationService } from '../../../user-portal/services/toastr/toastr.service';

@Component({
  selector: 'app-how-you-feels-section',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Clipboard, ToastrNotificationService ],
  templateUrl: './how-you-feels-section.component.html',
  styleUrl: './how-you-feels-section.component.css'
})
export class HowYouFeelsSectionComponent {

  constructor(private clipboard: Clipboard, private toastr: ToastrNotificationService) {}

  openChat() {
    // Open chat
  }

  coppyNumberCall() {
    const number = '0800 000 0000';

    this.clipboard.copy(number);
    this.toastr.showSuccess('Numero de telefone copiado com sucesso', 'Success');
  }

  openScheduleSupportModal() {
    // Open modal
  }
}
