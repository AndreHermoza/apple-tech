import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit{

constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'AppleTech | Servicios y Soporte Técnico';
    const pageDescription = 'Reparaciones, soporte técnico y asesorías en productos Apple.';
    const pageUrl = 'https://apple-tech-2lzy661pd.vercel.app/services';
    const pageImage = 'https://ibericamultimedia.com/wp-content/uploads/2005/12/apple-servicio-tecnico-madrid-vallecas-reparar-mac-iphone-700x450p.png';

    this.title.setTitle(pageTitle);

    this.meta.addTags([
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: 'soporte técnico Apple, reparaciones iPhone, servicio técnico MacBook, asesorías Apple' },

      
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: pageUrl },
      { property: 'og:image', content: pageImage },

      
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: pageImage }
    ]);
  }
}
