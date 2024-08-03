import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-join-us-section',
  standalone: true,
  imports: [ CommonModule ],
  providers: [ Router ],
  templateUrl: './app-join-us-section.component.html',
  styleUrl: './app-join-us-section.component.css'
})
export class AppJoinUsSectionComponent {

    constructor(private router: Router) {}

    navigateTo(path: string) {
        this.router.navigate([path]);
    }
    
}
