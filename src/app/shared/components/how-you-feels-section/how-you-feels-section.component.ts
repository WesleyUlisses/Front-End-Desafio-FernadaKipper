import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-how-you-feels-section',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './how-you-feels-section.component.html',
  styleUrl: './how-you-feels-section.component.css'
})
export class HowYouFeelsSectionComponent {

  constructor(private clipboard: Clipboard, private toastr: ToastrService) {}

  openChat() {
    // Open chat
  }

  coppyNumberCall() {
    const number = '0800 000 0000';

    this.clipboard.copy(number);
    this.toastr.show('Numero de telefone copiado com sucesso', 'Success', { timeOut: 6000,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-center',
      messageClass: 'toast-message',
      tapToDismiss: true,
      newestOnTop: true,
      progressAnimation : 'decreasing',
      
    });
  }

  openScheduleSupportModal() {
    // Open modal
  }
}
