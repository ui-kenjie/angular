import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  fabars = faBars;
  navList: {title:string, url: string}[] = [
    { 
      title : "Home", 
      url : '/home'
    },
    { 
      title : "Careers", 
      url : '/careers'
    },
    { 
      title : "Company Profile", 
      url : '/company-profile'
    },
    { 
      title : "FAQs", 
      url : '/faqs'
    },
    { 
      title : "Contact Us", 
      url : '/contact-us'
    }
  ];
}
