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
    this.title.setTitle('AppleTech | Servicios y Soporte Técnico');
    this.meta.addTags([
      { name: 'description', content: 'Reparaciones, soporte técnico y asesorías en productos Apple.' },
      { property: 'og:title', content: 'Servicios AppleTech' },
      { property: 'og:description', content: 'Conoce nuestros servicios de soporte técnico y reparaciones.' },
      { property: 'og:image', content: 'https://www.apple.com/v/iphone/home/az/images/overview/hero/hero_iphone.jpg' }
    ]);
  }
}
