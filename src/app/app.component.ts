import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderHomeComponent } from './user-portal/components/header-home/header-home.component';
import { SideBarComponent } from './user-portal/components/side-bar/side-bar.component';
import { ChatBotModalComponent } from './shared/components/chat-bot-modal/chat-bot-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SideBarComponent,
    HeaderHomeComponent,
    ChatBotModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'apoioecocrise';

  constructor() {}

}