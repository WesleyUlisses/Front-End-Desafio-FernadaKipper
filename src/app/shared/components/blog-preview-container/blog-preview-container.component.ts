import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPreviewPostsComponent } from '../blog-preview-posts/blog-preview-posts.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-preview-container',
  standalone: true,
  imports: [ CommonModule, BlogPreviewPostsComponent ],
  templateUrl: './blog-preview-container.component.html',
  styleUrl: './blog-preview-container.component.css'
})
export class BlogPreviewContainerComponent implements AfterViewInit{

  posts = [
    {
      id: '1',
      title: 'Cuidados com a Saúde Mental Durante e Após Desastres Naturais.',
      description: 'Desastres naturais são eventos que podem causar não apenas danos físicos, mas também abalos emocionais significativos. ',
      image: 'https://adm.cejam.org.br/storage/imagens_noticias/1ad25a30-9be3-11ed-9eaf-cd167e768a5b.jpg'
    },
    {
      id: '2',
      title: 'Como Criar um Plano de Emergência Familiar.',
      description: 'Ter um plano de emergência familiar bem estruturado é crucial para assegurar a segurança de todos em situações de crise.',
      image: 'https://i0.wp.com/nacasa.pt/wp-content/uploads/2023/10/Falar-com-os-mais-pequenos-jpg.webp?resize=1200%2C600&ssl=1'
    },
    {
      id: '3',
      title: 'Voluntariado em Tempos de Crise: Como Você Pode Fazer a Diferença',
      description: 'O voluntariado   é uma maneira poderosa de se envolver em atividades que ajudam a amenizar os danos causados a vítimas',
      image: 'https://www.fundacaotelefonicavivo.org.br/wp-content/uploads/2021/06/voluntariado-corporativo-no-combate-a-fome-pandemia-facebook.jpg'
    },
    {
      id: '4',
      title: 'Uso de Tecnologias e Aplicativos para Segurança em Desastres',
      description: 'A tecnologia tem se mostrado uma aliada indispensável na diminuição dos impactos de desastres naturais e na proteção das comunidades afetadas.',
      image: 'https://s2.glbimg.com/7E4iK7HaieLJoj5CU1SNMQPANdI=/e.glbimg.com/og/ed/f/original/2022/01/06/37640.jpg'
    }
  ];

  constructor() {}

  ngAfterViewInit() {

  }

}
