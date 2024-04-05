import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public menuButtonClicked = false;
  public games: string[] = ['Valorant', 'Apex Legends', 'FIFA', 'UFC', 'GTA', 'Assassins Creed', 'Far Cry'];
  public devTools: string[] = ['BitBucket', 'Github', 'Jira', 'Visual Studio Code', 'Azure DevOps', 'Karma', 'Jasmine'];
  public countries: string[] = ['France', 'China', 'Vietnam', 'Singapore', 'Saudi', 'Thailand', 'Indonesia'];

  public openResume(): void {
    window.open('https://drive.google.com/file/d/17d4fvZYEIObBb2RvuaOO1f5dDiz_UHla/view?usp=drive_link');
  }

  public openMenu(): void {
    this.menuButtonClicked = true;
  }

  public closeMenu(): void {
    this.menuButtonClicked = false;
  }
}
