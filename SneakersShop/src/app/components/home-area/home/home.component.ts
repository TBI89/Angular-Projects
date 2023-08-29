import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from '../youtube/youtube.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, YoutubeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
