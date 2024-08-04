import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderLandingPageComponent } from '../../../shared/components/app-header-landing-page/app-header-landing-page.component';
import { AppFooterLandingPageComponent } from '../../../shared/components/app-footer-landing-page/app-footer-landing-page.component';
import { BlogViewPostContainerComponent } from '../../../blog/components/blog-view-post-container/blog-view-post-container.component';
import { BlogService } from '../../services/blog-service/blog.service';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderLandingPageComponent,
    AppFooterLandingPageComponent,
    BlogViewPostContainerComponent
  ],
  providers: [BlogService],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.css'
})
export class PostViewComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  post = {
    id: '1',
    title: 'Cuidados com a Saúde Mental Durante e Após Desastres Naturais',
    description: `Desastres naturais são eventos que podem causar não apenas danos físicos, mas também abalos emocionais significativos. Aqueles que vivenciam situações como essas frequentemente enfrentam reações emocionais intensas, como medo, tristeza, confusão e raiva. Diante desses desafios, é necessário buscar a ajuda de profissionais de psicologia. Essa área de estudo foca no comportamento de pessoas em situações de desastres e acidentes, oferecendo assistência no pós-trauma e desenvolvendo atividades de intervenção para  apoio e superação do trauma.

A psicologia das emergências é uma especialidade da psicologia que desempenha um papel vital na redução do estresse e na recuperação psicológica das vítimas. A seguir, apresentamos algumas orientações para o cuidado e manejo durante e após desastres naturais, com o objetivo de minimizar os impactos psicológicos nas vítimas:

1. Mantenha-se informado a partir de fontes confiáveis e utilize plataformas que forneçam informações atualizadas e precisas sobre a situação do desastre em sua região, a fim de evitar que  informações errôneas ou atrasadas aumentem  a ansiedade e o estresse.

2. Priorize as medidas de segurança e cuide de si próprio e de seus parentes, assegurando-se de que estão em um ambiente seguro. Isso ajuda a reduzir a sensação de vulnerabilidade e aumenta a sensação de controle sobre a situação.

3. Evite o consumo excessivo de exposição a notícias sobre o desastre nos canais de TV, redes sociais e outros meios de comunicação. O excesso de informações pode exacerbar o estresse e a ansiedade.

4. Mantenha contato com pessoas próximas para obter apoio emocional daqueles em quem confia, isso pode ser extremamente reconfortante. 

5. Informe-se sobre serviços de apoio psicológico disponíveis em sua região ou procure serviços voluntários de acolhimento psicológico online. Profissionais de psicologia podem oferecer suporte essencial para a sua recuperação emocional.

6. Sentimentos de medo, tristeza, confusão ou raiva são normais nesse contexto. Aceite esses sentimentos e converse sobre eles com pessoas próximas ou com um psicólogo. 

Em tempos de crise, cuidar da saúde mental é tão crucial quanto cuidar da saúde física. Seguir essas orientações pode ajudar a minimizar os impactos psicológicos de desastres naturais, expressar emoções pode ser um passo importante para uma recuperação mais saudável e equilibrada.
`,
    image: 'https://apoioecocrise.vercel.app/assets/images/landing%20page/you_are_not_alone.svg'
  };

  async ngOnInit() {
    this.post.id = this.getPostId();
  }

  async getPost(id: string) {
    this.blogService.getPostById(id).subscribe((post) => {
      this.post = post;
    });
  }

  getPostId() {

    if (typeof window !== 'undefined') {
      const url = window.location.href;
      const urlParts = url.split('/');
      const postId = urlParts[urlParts.length - 1];
      return postId;
    }

    return '';

  }

  loadPostOnViewer() {

    let postId = this.getPostId();

    this.getPost(postId);

  }
}
