import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="#home" class="logo">
            <span class="logo-highlight">xcel</span>_dev
          </a>

          <div class="nav-links">
            <a href="#home" class="nav-link">Domů</a>
            <a href="#about" class="nav-link">O mně</a>
            <a href="#skills" class="nav-link">Dovednosti</a>
            <a href="#projects" class="nav-link">Projekty</a>
            <a href="#contact" class="nav-link">Kontakt</a>
          </div>

          <div class="nav-actions">
            <button class="theme-btn" (click)="themeService.toggleTheme()">
              <fa-icon [icon]="faPalette"></fa-icon>
            </button>

            <button class="mobile-btn" (click)="toggleMenu()">
              ☰
            </button>
          </div>
        </nav>
      </div>

      <div class="mobile-menu" [class.active]="isMenuOpen()">
        <a href="#home" class="mobile-link" (click)="closeMenu()">Domů</a>
        <a href="#about" class="mobile-link" (click)="closeMenu()">O mně</a>
        <a href="#skills" class="mobile-link" (click)="closeMenu()">Dovednosti</a>
        <a href="#projects" class="mobile-link" (click)="closeMenu()">Projekty</a>
        <a href="#contact" class="mobile-link" (click)="closeMenu()">Kontakt</a>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--color-card);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
      z-index: 1000;
      padding: 20px 0;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      text-decoration: none;
    }

    .logo-highlight {
      color: var(--color-primary);
    }

    .nav-links {
      display: flex;
      gap: 32px;
    }

    .nav-link {
      color: var(--color-text-light);
      text-decoration: none;
      font-weight: 500;
      padding: 8px 0;
      transition: color 0.3s;
    }

    .nav-link:hover {
      color: var(--color-primary);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .theme-btn {
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      color: var(--color-text);
      transition: background-color 0.3s;
    }

    .theme-btn:hover {
      background-color: var(--color-bg-alt);
    }

    .mobile-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text);
      padding: 8px;
    }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--color-card);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-lg);
      padding: 20px;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s;
    }

    .mobile-menu.active {
      display: block;
      transform: translateY(0);
      opacity: 1;
    }

    .mobile-link {
      display: block;
      color: var(--color-text-light);
      text-decoration: none;
      padding: 12px 0;
      border-bottom: 1px solid var(--color-border-light);
    }

    .mobile-link:hover {
      color: var(--color-primary);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .mobile-btn {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  isMenuOpen = signal(false);

  // TADY ikona pro přepínač šedý ↔ modrý
  faPalette = faPalette;

  toggleMenu() {
    this.isMenuOpen.update(state => !state);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
