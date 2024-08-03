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
    this.toastr.show('Numero de telefone copiado com sucesso', 'Sucesso', { timeOut: 3000, closeButton: true, progressAnimation: 'increasing'
    });
  }

  openScheduleSupportModal() {
    // Open modal
  }
}
