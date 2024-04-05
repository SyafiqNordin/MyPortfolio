import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public menuButtonClicked = false;

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
