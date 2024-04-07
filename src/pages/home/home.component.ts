import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public menuButtonClicked = false;
  public showPopover = false;
  public games: string[] = ['Valorant', 'Apex Legends', 'FIFA', 'UFC', 'GTA', 'Assassins Creed', 'Far Cry'];
  public devTools: string[] = ['BitBucket', 'Git', 'Jira', 'Visual Studio Code', 'Azure DevOps', 'Karma', 'Jasmine'];
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

  public sendFeedback(): void {
    window.open('https://ngl.link/syxfqn');
  }

  public onClipboardCopy(successful: boolean): void {
    this.showPopover = successful;

    if (successful) {
      setTimeout(() => {
          this.showPopover = false;
      }, 2000);
    }
  }

  public openLinkedin(): void {
    window.open('https://www.linkedin.com/in/muhammad-syafiq-a4b25720b/');
  }

  public openGithub(): void {
    window.open('https://github.com/SyafiqNordin');
  }
  
  public openInstagram(): void {
    window.open('https://www.instagram.com/syxfqn/');
  }

  public openTwitter(): void {
    window.open('https://twitter.com/xilonzx');
  }
}
