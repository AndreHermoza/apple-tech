import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('AppleTech | Innovación en Tecnología');
    this.meta.addTags([
      { name: 'description', content: 'Descubre lo último en productos Apple y tecnología premium.' },
      { property: 'og:title', content: 'AppleTech - Inicio' },
      { property: 'og:image', content: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-15.jpg' }
    ]);
  }
}


