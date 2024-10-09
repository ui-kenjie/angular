import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'HELLO WORLDS';
  nickname: any = "kenjie123"
  try: any = '12aszAAA'
  imgUrl: string = "https://miro.medium.com/v2/resize:fit:1400/1*xvkF4IfpJ65JyYc_xQm6Lw.png";
}
