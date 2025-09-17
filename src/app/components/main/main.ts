import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'AppleTech | Innovación en Tecnología';
    const pageDescription = 'Descubre lo último en productos Apple y tecnología premium.';
    const pageUrl = 'https://apple-tech-2lzy661pd.vercel.app/';  
    const pageImage = 'https://phantom-marca-mx.unidadeditorial.es/53a8b9f15cdda24b3d7b83d795da59e3/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/06/04/16859147309215.jpg'; 

  
    this.title.setTitle(pageTitle);

    
    this.meta.addTags([
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: 'Apple, iPhone, MacBook, iPad, soporte técnico, tecnología, innovación' },

   
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: pageUrl },
      { property: 'og:image', content: pageImage },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage }
    ]);
  }
}


